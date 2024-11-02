import { SubAttributes } from "@/types/Attributes";
import { Character } from "@/types/Character";
import { calculateSubAttributes } from "@/helpers/calculateSubAttributes";
import { calculateExperience } from "./experience";

interface DamageStatus {
  damage: number;
  doesHit: boolean;
  isCritical: boolean;
}

interface AttackOrder {
  player: {
    canAttack: boolean;
    remainingSpeed: number;
  };
  opponent: {
    canAttack: boolean;
    remainingSpeed: number;
  };
}

const getRandomNumber = () => {
  return Math.random() * 100;
};

const calculateAttackerPriority = (
  playerSubAttributes: SubAttributes,
  opponentSubAttributes: SubAttributes,
  memo?: {
    playerPosition: number;
    opponentPosition: number;
  }
): AttackOrder => {
  const targetSpeed = 100;
  let canKeepRacing = true;
  let playerPosition = memo?.playerPosition ?? 0;
  let opponentPosition = memo?.opponentPosition ?? 0;

  while (canKeepRacing) {
    playerPosition += playerSubAttributes.speed;
    opponentPosition += opponentSubAttributes.speed;
    canKeepRacing =
      targetSpeed >= playerPosition || targetSpeed >= opponentPosition;
  }

  return {
    opponent: {
      canAttack: opponentPosition > playerPosition,
      remainingSpeed:
        opponentPosition > playerPosition
          ? opponentPosition - targetSpeed
          : opponentPosition,
    },
    player: {
      canAttack: playerPosition >= opponentPosition,
      remainingSpeed:
        playerPosition >= opponentPosition
          ? playerPosition - targetSpeed
          : playerPosition,
    },
  };
};

const giveAttack = (
  characterStats: SubAttributes,
  targetStats: SubAttributes,
  isCharacterMage: boolean
): DamageStatus => {
  const doesAttackHit = getRandomNumber() >= targetStats.evasionChance;
  const isCritical = characterStats.criticalChance >= getRandomNumber();
  let damage = 0;
  let criticalMultiplier = 1;

  if (doesAttackHit) {
    if (isCritical) criticalMultiplier = 2;

    const characterBaseDamage = isCharacterMage
      ? characterStats.magicalDamage
      : characterStats.physicalDamage;

    const opponentBaseDefense = isCharacterMage
      ? targetStats.magicalResistence
      : targetStats.physicalResistence;

    damage = characterBaseDamage * criticalMultiplier - opponentBaseDefense;
    if (damage < 0) damage = 0;

    return {
      damage,
      doesHit: doesAttackHit,
      isCritical,
    };
  } else {
    return {
      damage,
      doesHit: doesAttackHit,
      isCritical: false,
    };
  }
};

export const fight = (
  player: Character,
  opponent: Character,
  memo?: {
    turn: number;
    turnActivity: AttackOrder;
    playerStats: SubAttributes;
    opponentStats: SubAttributes;
  }
) => {
  const turn = memo?.turn ? memo.turn + 1 : 1;
  const playerStats =
    memo?.playerStats ?? calculateSubAttributes(player.attributes);
  const opponentStats =
    memo?.opponentStats ?? calculateSubAttributes(opponent.attributes);

  const turnActivity = calculateAttackerPriority(playerStats, opponentStats, {
    playerPosition: memo?.turnActivity.player.remainingSpeed ?? 0,
    opponentPosition: memo?.turnActivity.opponent.remainingSpeed ?? 0,
  });
  let turnResult: DamageStatus;

  if (turnActivity.opponent.canAttack) {
    turnResult = giveAttack(opponentStats, playerStats, opponent.isMage);
    playerStats.healthPoints -= turnResult.damage;
    console.log(
      `Opponent ataca e dá ${turnResult.damage} de dano. Player tem ${
        playerStats.healthPoints
      } vida sobrando ${turnResult.isCritical ? "CRITICO" : ""} ${
        turnResult.doesHit ? "" : "MISS"
      }`
    );
  } else {
    turnResult = giveAttack(playerStats, opponentStats, player.isMage);
    opponentStats.healthPoints -= turnResult.damage;
    console.log(
      `Player ataca e dá ${turnResult.damage} de dano. Opponent tem ${
        opponentStats.healthPoints
      } vida sobrando ${turnResult.isCritical ? "CRITICO" : ""} ${
        turnResult.doesHit ? "" : "MISS"
      }`
    );
  }

  const isMatchOver =
    playerStats.healthPoints <= 0 || opponentStats.healthPoints <= 0;

  if (!isMatchOver) {
    fight(player, opponent, {
      opponentStats,
      turnActivity,
      playerStats,
      turn,
    });
  } else {
    console.log("Match is over!");
    console.log({
      playerStats,
      opponentStats,
      turn,
    });
    if (playerStats.healthPoints > 0) {
      const gainedExp = Math.floor(opponent.experience / 10);
      const exp = calculateExperience(gainedExp);
      console.log(`Player gained ${exp} experience points `);
    }
  }
};
