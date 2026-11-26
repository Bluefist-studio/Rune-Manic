(() => {
  // src/cards.js
  var cards = {
    hardened: {
      name: "Hardened",
      rank: 1,
      colors: ["blue", "purple"],
      attribute: "hardened",
      attributeText: "While defending, this rune taken damage is reduced by 1",
      image: "Cards online/RM_Card_B1 Hardened4.png"
    },
    bolt: {
      name: "Bolt",
      rank: 1,
      colors: ["green", "orange"],
      attribute: "bolt",
      attributeText: "Trade hit points for damage againts any rune in play",
      image: "Cards online/RM_Card_B1 Reach4.png"
    },
    growth: {
      name: "Growth",
      rank: 1,
      colors: ["green", "purple"],
      attribute: "growth",
      attributeText: "Gains 1 HP at the beginning of each turn. No maximum HP.",
      image: "Cards online/RM_Card_G1 Growth.png"
    },
    soulbind: {
      name: "Soulbind",
      rank: 2,
      colors: ["green", "purple"],
      attribute: "soulbind",
      attributeText: "Link this rune to another friendly rune. Whenever it takes damage, Soulbind takes that damage instead.",
      image: "Cards online/RM_Card_G2 Regrowth.png"
    },
    leech: {
      name: "Leech",
      rank: 2,
      colors: ["purple", "black"],
      attribute: "leech",
      attributeText: "When dealing damage, restores 1 HP, up to its maximum HP.",
      image: "Cards online/RM_Card_P2 Leech.png"
    },
    ambush: {
      name: "Ambush",
      rank: 2,
      colors: ["green", "black"],
      attribute: "ambush",
      attributeText: "Deals +1 damage when attacking a rune that has not yet acted this turn.",
      image: "Cards online/RM_Card_G2 Ambush.png"
    },
    berserk: {
      name: "Berserk",
      rank: 2,
      colors: ["red"],
      attribute: "berserk",
      attributeText: "Has +1 HP and gains +1 attack for each HP lost.",
      image: "Cards online/RM_Card_R2 Berserk4.png"
    },
    frenzy: {
      name: "Frenzy",
      rank: 2,
      colors: ["red"],
      attribute: "frenzy",
      attributeText: "Can attack twice in one turn.",
      image: "Cards online/RM_Card_R2 Frenzy4.png"
    },
    snare: {
      name: "Snare",
      rank: 2,
      colors: ["blue", "black"],
      attribute: "snare",
      attributeText: "Prevents an attacked rune from moving during its next turn.",
      image: "Cards online/RM_Card_B2 Snare.png"
    },
    cloak: {
      name: "Cloak",
      rank: 1,
      colors: ["green", "black"],
      attribute: "cloak",
      attributeText: "While in the Backline, cannot be targeted by enemy attributes.",
      image: "Cards online/RM_Card_G1 Cloak.png"
    },
    hardenedMajor: {
      name: "Hardened Major",
      rank: 2,
      colors: ["blue"],
      attribute: "hardened",
      attributeText: "While defending, this rune taken damage is reduced by 1",
      image: "Cards online/RM_Card_B2 Hardened Major4.png"
    },
    guardian: {
      name: "Guardian",
      rank: 2,
      colors: ["blue"],
      attribute: "guardian",
      attributeText: "Reduces damage dealt to friendly Backline runes by 1.",
      image: "Cards online/RM_Card_B2 Guardian.png"
    },
    martyr: {
      name: "Martyr",
      rank: 2,
      colors: ["blue"],
      attribute: "martyr",
      attributeText: "Destroy this rune to allow another friendly rune to use an action again this turn.",
      image: "Cards online/RM_Card_B2 Martyr.png"
    },
    recall: {
      name: "Recall",
      rank: 2,
      colors: ["green"],
      attribute: "recall",
      attributeText: "Return a friendly rune to your hand, including all runes attached beneath it.",
      image: "Cards online/RM_Card_G2 Recall.png"
    },
    execution: {
      name: "Execution",
      rank: 4,
      colors: ["black"],
      attribute: "execution",
      attributeText: "When attacking a rune that has lost 1 or more HP, destroy it without taking damage.",
      image: "Cards online/RM_Card_R3 Execution.png"
    },
    transpose: {
      name: "Transpose",
      rank: 3,
      colors: ["black"],
      attribute: "transpose",
      attributeText: "Swap the positions of two opposing runes. The Black player chooses the runes. Both must end up in legal positions.",
      image: "Cards online/RM_Card_B3 transpose.png"
    },
    infusion: {
      name: "Infusion",
      rank: 3,
      colors: ["orange"],
      attribute: "infusion",
      attributeText: "Give another friendly rune +2 attack at the cost of 1 HP.",
      image: "Cards online/RM_Card_O3 Infusion.png"
    },
    command: {
      name: "Command",
      rank: 3,
      colors: ["green"],
      attribute: "command",
      attributeText: "Allows another friendly rune to perform an additional action.",
      image: "Cards online/RM_Card_G3 Command.png"
    },
    doubleBolt: {
      name: "Double Bolt",
      rank: 2,
      colors: ["green"],
      attribute: "bolt",
      attributeText: "Trade hit points for damage againts any rune in play",
      image: "Cards online/RM_Card_B2 Reach Major4.png"
    },
    amplifying: {
      name: "Amplifying",
      rank: 3,
      colors: ["green", "blue"],
      attribute: "amplifying",
      attributeText: "Use this rune to amplify another rune, giving it +1 to its attack",
      image: "Cards online/RM_Card_B3 Amplifying4.png"
    },
    focus: {
      name: "Focus",
      rank: 3,
      colors: ["green", "blue"],
      attribute: "focus",
      attributeText: "Mimic the attribute of one of your rune in play, choose at the beginning of your turn",
      image: "Cards online/RM_Card_B3 Focus4.png"
    },
    splinter: {
      name: "Splinter",
      rank: 4,
      colors: ["green", "blue"],
      attribute: "splinter",
      attributeText: "When damaging a rune with this rune it also deals 1 damage to 3 other runes",
      image: "Cards online/RM_Card_B4 Splinter4.png"
    },
    mending: {
      name: "Mending",
      rank: 1,
      colors: ["orange", "purple"],
      attribute: "mending",
      attributeText: "Restore 1 hit point on a friendly rune",
      image: "Cards online/RM_Card_O1 Mending4.png"
    },
    deflecting: {
      name: "Deflecting",
      rank: 1,
      colors: ["orange"],
      attribute: "deflecting",
      attributeText: "When attacked, choose whether to deflect or take the normal attack. If deflecting, roll a die: on 4+ negate damage; on 6, the attacker loses 1 Hit Point. No other damage is dealt when deflecting.",
      image: "Cards online/RM_Card_O1 Deflecting4.png"
    },
    phoenix: {
      name: "Phoenix",
      rank: 1,
      colors: ["red", "orange"],
      attribute: "phoenix",
      attributeText: "When destroyed, roll a die. On 4+, return to hand.",
      image: "Cards online/RM_Card_O1 Phoenix.png"
    },
    deflectingMajor: {
      name: "Deflecting Major",
      rank: 2,
      colors: ["orange"],
      attribute: "deflecting-major",
      attributeText: "When attacked, choose whether to deflect or take the normal attack. If deflecting, roll a die: on 4+ negate damage and the attacker loses 1 Hit Point. No other damage is dealt when deflecting.",
      image: "Cards online/RM_Card_O2 Deflecting Major4.png"
    },
    fire: {
      name: "Fire",
      rank: 2,
      colors: ["orange"],
      attribute: "fire",
      attributeText: "Inflicts 2 damage to any rune in play, then is destroyed immediately",
      image: "Cards online/RM_Card_O2 Fire4.png"
    },
    acid: {
      name: "Acid",
      rank: 2,
      colors: ["orange"],
      attribute: "acid",
      attributeText: "Inflicts 1 damage to 3 rune in play, then is destroyed immediately",
      image: "Cards online/RM_Card_O2 Acid4.png"
    },
    lightning: {
      name: "Lightning",
      rank: 2,
      colors: ["orange"],
      attribute: "lightning",
      attributeText: "When this rune attacks or is attacked, it disables the opposing rune for 1 turn.",
      image: "Cards online/RM_Card_O2 Lightning4.png"
    },
    fireBall: {
      name: "Fire Ball",
      rank: 3,
      colors: ["orange"],
      attribute: "fire-ball",
      attributeText: "Does 2 damage to 1 rune and 1 damage to 3 more runes of your choice then is destroyed immediately",
      image: "Cards online/RM_Card_O3 Fire4.png"
    },
    intangible: {
      name: "Intangible",
      rank: 3,
      colors: ["orange"],
      attribute: "intangible",
      attributeText: "While defending, attacking rune's attributes have no effect against this rune",
      image: "Cards online/RM_Card_O3 Intangible4.png"
    },
    magma: {
      name: "Magma",
      rank: 4,
      colors: ["orange"],
      attribute: "magma",
      attributeText: "Roll a dice, on a roll of 3+ you inflict 2 damage to a rune of your choice",
      image: "Cards online/RM_Card_O4 Magma4.png"
    },
    elementary: {
      name: "Elementary",
      rank: 1,
      colors: ["grey"],
      attribute: "any-next-rank",
      attributeText: "This rune can be upgraded to any rune of the next rank",
      image: "Cards online/RM_Card_G1 Elementary4.png"
    },
    transmute: {
      name: "Transmute",
      rank: 2,
      colors: ["grey"],
      attribute: "any-next-rank",
      attributeText: "This rune can be upgraded to any rune of the next rank",
      image: "Cards online/RM_Card_G2 transmute4.png"
    },
    haunting: {
      name: "Haunting",
      rank: 1,
      colors: ["purple"],
      attribute: "haunting",
      attributeText: "The rune that destroys this rune has -1 to its attack until its own destruction, this is not cumulative",
      image: "Cards online/RM_Card_P1 haunting4.png"
    },
    phantom: {
      name: "Phantom",
      rank: 1,
      colors: ["purple"],
      attribute: "phantom",
      attributeText: "Can be placed in the Backline without a Frontline rune.",
      image: "Cards online/RM_Card_P1 Phanrom4.png"
    },
    fortitude: {
      name: "Fortitude",
      rank: 2,
      colors: ["purple"],
      attribute: "fortitude",
      attributeText: "This rune has -1 to its attack and +2 to its hit points.",
      image: "Cards online/RM_Card_P2 Fortitude4.png"
    },
    spectral: {
      name: "Spectral",
      rank: 2,
      colors: ["purple"],
      attribute: "spectral",
      attributeText: "Disable a rune of your choice until your next turn or this rune get destroyed. Must be in the Frontline",
      image: "Cards online/RM_Card_P2 Spectral4.png"
    },
    torment: {
      name: "Torment",
      rank: 3,
      colors: ["purple"],
      attribute: "fortitude",
      attributeText: "This rune has -1 to its attack and +2 to its hit points.",
      image: "Cards online/RM_Card_P3 Regenerative4.png"
    },
    necrotic: {
      name: "Necrotic",
      rank: 3,
      colors: ["purple"],
      attribute: "necrotic",
      attributeText: "When one of your rune is destroyed, roll a dice, on 3+ add a Haunting rune to your hand",
      image: "Cards online/RM_Card_P3 Necromantic4.png"
    },
    soul: {
      name: "Soul",
      rank: 4,
      colors: ["purple"],
      attribute: "soul",
      attributeText: "Roll a dice, on a roll of 3+ this rune cause 1 damage to a rune of your choice and gain 1 hit point",
      image: "Cards online/RM_Card_P4 Soul4.png"
    },
    brawling: {
      name: "Brawling",
      rank: 1,
      colors: ["red", "black"],
      attribute: "brawling",
      attributeText: "This rune has +1 to its hit points.",
      image: "Cards online/RM_Card_R1 Brawler4.png"
    },
    piercing: {
      name: "Piercing",
      rank: 2,
      colors: ["black"],
      attribute: "piercing",
      attributeText: "This rune always ignores damage reduction",
      image: "Cards online/RM_Card_R2 Piercing4.png"
    },
    uprising: {
      name: "Uprising",
      rank: 2,
      colors: ["red"],
      attribute: "uprising",
      attributeText: "For each Brawling rune in play this rune gets +1 to its attack",
      image: "Cards online/RM_Card_R2 Uprising4.png"
    },
    piercingMajor: {
      name: "Piercing Major",
      rank: 3,
      colors: ["black"],
      attribute: "piercing-major",
      attributeText: "This rune always ignores damage reduction and has +1 to its attack",
      image: "Cards online/RM_Card_R3 Piercing Major4.png"
    },
    powerful: {
      name: "Powerful",
      rank: 3,
      colors: ["red"],
      attribute: "powerful",
      attributeText: "When attacking, this rune deals its normal damage and 1 damage to the rune behind its target",
      image: "Cards online/RM_Card_R3 Powerful4.png"
    },
    masterful: {
      name: "Masterful",
      rank: 4,
      colors: ["red", "black"],
      attribute: "masterful",
      attributeText: "When attacking with this rune, trade hit points for damage on 1 or more runes.",
      image: "Cards online/RM_Card_R4 Masterful4.png"
    }
  };

  // src/engine.js
  var FRONTLINE_SIZE = 4;
  var SLOT_COUNT = FRONTLINE_SIZE * 2;
  var RUNE_LIMITS = /* @__PURE__ */ new Set([4, 6, 8]);
  var DECK_RANK_LIMIT = 24;
  var ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE = true;
  var NO_PROGRESS_TURN_LIMIT = 4;
  var CARD_FIELDS = ["name", "rank", "colors", "attribute", "attributeText", "image"];
  var SUPPORTED_ATTRIBUTES = ["hardened", "any-next-rank", "fortitude", "brawling", "piercing", "piercing-major", "mending", "uprising", "haunting", "powerful", "fire", "magma", "intangible", "acid", "fire-ball", "deflecting", "deflecting-major", "lightning", "soul", "necrotic", "spectral", "bolt", "amplifying", "splinter", "masterful", "focus", "growth", "phoenix", "phantom", "cloak", "soulbind", "guardian", "ambush", "berserk", "frenzy", "snare", "leech", "martyr", "recall", "execution", "infusion", "command", "transpose"];
  var DAMAGE_ATTRIBUTES = /* @__PURE__ */ new Set(["acid", "bolt", "fire", "fire-ball", "masterful", "magma", "soul"]);
  function validateDeck(deck) {
    if (!Array.isArray(deck) || deck.length === 0) {
      throw new Error("A deck must contain at least one card.");
    }
    let totalRank = 0;
    for (const card of deck) {
      if (!card || typeof card !== "object" || Array.isArray(card) || Object.keys(card).some((key) => !CARD_FIELDS.includes(key)) || typeof card.name !== "string" || !card.name.trim() || !Number.isInteger(card.rank) || card.rank < 1 || !Array.isArray(card.colors) || card.colors.length === 0 || card.colors.some((color) => typeof color !== "string" || !color.trim()) || "attribute" in card && !SUPPORTED_ATTRIBUTES.includes(card.attribute) || "attributeText" in card && typeof card.attributeText !== "string" || "image" in card && typeof card.image !== "string") {
        throw new Error("Invalid card definition or unsupported attribute.");
      }
      if ("attributeText" in card && !("attribute" in card)) {
        throw new Error("A card with attribute text must have a supported attribute.");
      }
      totalRank += card.rank;
    }
    if (totalRank > DECK_RANK_LIMIT) {
      throw new Error("A deck cannot exceed 24 total ranks.");
    }
    if (!deck.some((card) => card.rank === 1)) {
      throw new Error("A deck must contain a rank 1 rune.");
    }
  }
  function createGame(decks, startingPlayer2 = 0, runeLimit = 4) {
    if (!Array.isArray(decks) || decks.length !== 2) {
      throw new Error("Exactly two decks are required.");
    }
    if (startingPlayer2 !== 0 && startingPlayer2 !== 1) {
      throw new Error("Starting player must be 0 or 1.");
    }
    if (!RUNE_LIMITS.has(runeLimit)) {
      throw new Error("Rune limit must be 4, 6, or 8.");
    }
    decks.forEach(validateDeck);
    return {
      runeLimit,
      players: decks.map((deck, playerIndex) => ({
        hand: deck.map((card, index) => ({
          ...card,
          id: `${playerIndex}-${index}`,
          colors: [...card.colors]
        })),
        slots: Array(SLOT_COUNT).fill(null),
        destroyed: [],
        turnsStarted: 0,
        nextGeneratedCardId: 0
      })),
      currentPlayer: startingPlayer2,
      winner: null,
      pendingDrawOffer: null,
      pendingDeflection: null,
      turn: 1,
      noProgressTurns: 0,
      turnHadProgress: false,
      lastRoll: null,
      lastDeflections: [],
      lastNecroticRolls: [],
      lastPhoenixRolls: [],
      lastSplinterTriggers: [],
      lastLeechHeals: [],
      lastSoulbindRedirects: [],
      nextSpectralEffectId: 0
    };
  }
  function currentCard(rune) {
    return rune.stack[rune.stack.length - 1];
  }
  function getRuneAttribute(rune) {
    const attribute = currentCard(rune).attribute;
    return attribute === "focus" ? rune.focusCopy?.attribute ?? null : attribute;
  }
  function isRuneDisabled(game2, playerIndex, slot) {
    const rune = game2.players[playerIndex].slots[slot];
    if (!rune) return false;
    const sources = game2.players.flatMap((player, owner) => player.slots.slice(0, FRONTLINE_SIZE).flatMap((source) => source && getRuneAttribute(source) === "spectral" && source.spectralEffect ? [{ owner, rune: source, ...source.spectralEffect }] : []));
    const lightningDisabled = new Set(game2.players.flatMap((player, owner) => player.slots.filter((target) => target?.lightningDisabledThroughTurn >= game2.turn).map((target) => `${owner}:${target.stack[0].id}`)));
    sources.sort((a, b) => b.order - a.order);
    for (let mask = (1 << sources.length) - 1; mask >= 0; mask--) {
      const active = (index) => Boolean(mask & 1 << sources.length - 1 - index);
      const disabled = (owner, id) => lightningDisabled.has(`${owner}:${id}`) || sources.some((source, index) => active(index) && source.owner !== owner && source.target === id);
      if (sources.every((source, index) => active(index) === !disabled(source.owner, source.rune.stack[0].id))) {
        return disabled(playerIndex, rune.stack[0].id);
      }
    }
    throw new Error("Could not resolve Spectral effects.");
  }
  function disableThroughNextTurn(game2, rune, owner) {
    const turnsUntilNextOwnerTurn = owner === game2.currentPlayer ? 2 : 1;
    rune.lightningDisabledThroughTurn = Math.max(
      rune.lightningDisabledThroughTurn ?? 0,
      game2.turn + turnsUntilNextOwnerTurn
    );
  }
  function refreshAmplifications(game2) {
    for (const player of game2.players) {
      for (const rune of player.slots) {
        if (rune) rune.amplification = 0;
      }
    }
    for (let owner = 0; owner < game2.players.length; owner++) {
      const player = game2.players[owner];
      for (let slot = 0; slot < SLOT_COUNT; slot++) {
        const source = player.slots[slot];
        if (!source || getRuneAttribute(source) !== "amplifying" || !source.amplifies || source.stunned || isRuneDisabled(game2, owner, slot)) continue;
        const target = player.slots.find((rune) => rune && rune.stack[0].id === source.amplifies);
        if (target) target.amplification++;
      }
    }
  }
  function getRuneStats(rune, owner) {
    const card = currentCard(rune);
    const attribute = getRuneAttribute(rune);
    const healthBonus = attribute === "brawling" || attribute === "berserk" ? 1 : attribute === "fortitude" ? 2 : 0;
    let attackBonus = (attribute === "fortitude" ? -1 : attribute === "piercing-major" ? 1 : 0) + (rune.amplification ?? 0) + (rune.infusionAttackBonus ?? 0);
    if (attribute === "berserk") attackBonus += rune.damage;
    if (attribute === "uprising") {
      if (!owner || !Array.isArray(owner.slots)) {
        throw new Error("Uprising's stats require its owner.");
      }
      attackBonus += owner.slots.filter((other) => other && currentCard(other).name === "Brawling").length;
    }
    if (rune.haunted) attackBonus--;
    const maxHealth = card.rank + healthBonus + rune.temporaryHealth;
    return {
      maxHealth,
      health: maxHealth - rune.damage,
      attack: Math.max(0, card.rank + attackBonus)
    };
  }
  function guardianReduction(game2, targetPlayer, targetSlot) {
    if (targetSlot < FRONTLINE_SIZE) return 0;
    return game2.players[targetPlayer].slots.reduce((count, rune, slot) => count + (rune && getRuneAttribute(rune) === "guardian" && !isRuneDisabled(game2, targetPlayer, slot) ? 1 : 0), 0);
  }
  function defendingDamage(source, target, damage, game2, targetPlayer, targetSlot) {
    const attribute = getRuneAttribute(source);
    const ignoresReduction = attribute === "piercing" || attribute === "piercing-major";
    const reduction = ignoresReduction ? 0 : (getRuneAttribute(target) === "hardened" ? 1 : 0) + guardianReduction(game2, targetPlayer, targetSlot);
    return Math.max(0, damage - reduction);
  }
  function combatDamage(source, target, sourceOwner, targetIsDefending, game2, targetPlayer, targetSlot) {
    const card = currentCard(source);
    const attribute = getRuneAttribute(source);
    const ambushBonus = targetIsDefending && attribute === "ambush" && !target.acted ? 1 : 0;
    const attack = targetIsDefending && getRuneAttribute(target) === "intangible" ? card.rank - (attribute === "fortitude" ? 1 : 0) - (source.haunted ? 1 : 0) + (source.amplification ?? 0) + (source.infusionAttackBonus ?? 0) : getRuneStats(source, sourceOwner).attack + ambushBonus;
    return targetIsDefending ? defendingDamage(source, target, attack, game2, targetPlayer, targetSlot) : Math.max(0, attack);
  }
  function getAttackDamage(game2, sourceSlot, targetSlot) {
    const source = game2.players[game2.currentPlayer].slots[sourceSlot];
    const target = game2.players[1 - game2.currentPlayer].slots[targetSlot];
    if (!source || !target) throw new Error("Attack damage requires an occupied source and target.");
    const execution = getRuneAttribute(source) === "execution" && target.damage > 0 && getRuneAttribute(target) !== "intangible";
    const lightningDisableTarget = getRuneAttribute(source) === "lightning" && getRuneAttribute(target) !== "intangible";
    const lightningDisableAttacker = getRuneAttribute(target) === "lightning" && getRuneAttribute(source) !== "intangible";
    const preview = execution ? { damage: 0, deflectable: isDeflecting(target), execution: true } : {
      damage: combatDamage(
        source,
        target,
        game2.players[game2.currentPlayer],
        true,
        game2,
        1 - game2.currentPlayer,
        targetSlot
      ),
      deflectable: isDeflecting(target)
    };
    if (preview.damage > 0 && hasActiveSoulbind(game2, 1 - game2.currentPlayer, target)) {
      preview.soulbindDamageRedirected = true;
    }
    if (lightningDisableTarget) preview.lightningDisableTarget = true;
    if (lightningDisableAttacker) preview.lightningDisableAttacker = true;
    return preview;
  }
  function getAttributeDamagePreview(game2, sourceSlot, targetPlayer, targetSlot, selectedTargets = []) {
    const source = game2.players[game2.currentPlayer].slots[sourceSlot];
    const target = game2.players[targetPlayer].slots[targetSlot];
    if (!source || !target) throw new Error("Attribute damage preview requires an occupied source and target.");
    const attribute = getRuneAttribute(source);
    let damage;
    let variable = false;
    switch (attribute) {
      case "fire":
        damage = 2;
        break;
      case "acid":
        damage = 1;
        break;
      case "fire-ball":
        damage = 2;
        break;
      case "magma":
        damage = 2;
        variable = true;
        break;
      case "soul":
        damage = 1;
        variable = true;
        break;
      case "bolt":
      case "masterful":
        damage = selectedTargets.filter((slot) => slot === targetSlot).length + 1;
        break;
      default:
        return null;
    }
    const preview = {
      damage: defendingDamage(source, target, damage, game2, targetPlayer, targetSlot),
      variable,
      deflectable: isDeflecting(target)
    };
    if (preview.damage > 0 && hasActiveSoulbind(game2, targetPlayer, target)) {
      preview.soulbindDamageRedirected = true;
    }
    return preview;
  }
  function rollSixSided(rollDie) {
    const value2 = rollDie();
    if (!Number.isInteger(value2) || value2 < 1 || value2 > 6) {
      throw new Error("Die roll must be an integer from 1 to 6.");
    }
    return value2;
  }
  function isDeflecting(rune) {
    const attribute = getRuneAttribute(rune);
    return attribute === "deflecting" || attribute === "deflecting-major";
  }
  function applyDamage(rune, damage) {
    const absorbed = Math.min(rune.temporaryHealth, damage);
    rune.temporaryHealth -= absorbed;
    rune.damage += damage - absorbed;
  }
  function activeSoulbindSlot(game2, owner, target) {
    const targetId = target.stack[0].id;
    return game2.players[owner].slots.findIndex((source, slot) => source && getRuneAttribute(source) === "soulbind" && source.soulbinds === targetId && !source.stunned && getRuneStats(source, game2.players[owner]).health > 0 && !isRuneDisabled(game2, owner, slot));
  }
  function hasActiveSoulbind(game2, owner, target) {
    return activeSoulbindSlot(game2, owner, target) >= 0;
  }
  function dealDamage(game2, rune, damage) {
    const targetOwner = game2.players.findIndex((player) => player.slots.includes(rune));
    if (damage > 0 && targetOwner >= 0 && getRuneAttribute(rune) !== "soulbind") {
      const sourceSlot = activeSoulbindSlot(game2, targetOwner, rune);
      if (sourceSlot >= 0) {
        applyDamage(game2.players[targetOwner].slots[sourceSlot], damage);
        game2.lastSoulbindRedirects.push({
          sourcePlayer: targetOwner,
          sourceSlot,
          targetPlayer: targetOwner,
          targetSlot: game2.players[targetOwner].slots.indexOf(rune),
          damage
        });
        return;
      }
    }
    applyDamage(rune, damage);
  }
  function restoreLeechHealth(game2, rune, owner, slot, damageDealt) {
    if (damageDealt <= 0 || getRuneAttribute(rune) !== "leech" || getRuneStats(rune, game2.players[owner]).health <= 0 || rune.damage <= 0) return;
    rune.damage--;
    game2.lastLeechHeals.push({ player: owner, slot, card: currentCard(rune).name });
  }
  function incomingDamage(game2, target, source, damage, targetPlayer, targetSlot, rollDie, deflect = true) {
    if (!isDeflecting(target) || !deflect) return damage;
    const value2 = rollSixSided(rollDie);
    const success = value2 >= 4;
    const returned = success && (getRuneAttribute(target) === "deflecting-major" || value2 === 6) ? 1 : 0;
    const sourcePlayer = game2.players.findIndex((player) => player.slots.includes(source));
    const sourceSlot = sourcePlayer < 0 ? -1 : game2.players[sourcePlayer].slots.indexOf(source);
    const returnedDamage = sourcePlayer >= 0 ? Math.max(0, returned - guardianReduction(game2, sourcePlayer, sourceSlot)) : returned;
    dealDamage(game2, source, returnedDamage);
    game2.lastDeflections.push({ card: currentCard(target).name, targetPlayer, targetSlot, value: value2, success, returned: returnedDamage });
    return success ? 0 : damage;
  }
  function incomingAttributeDamage(game2, target, source, damage, targetPlayer, targetSlot, rollDie) {
    if (targetSlot >= FRONTLINE_SIZE && getRuneAttribute(target) === "cloak") return 0;
    return incomingDamage(
      game2,
      target,
      source,
      defendingDamage(source, target, damage, game2, targetPlayer, targetSlot),
      targetPlayer,
      targetSlot,
      rollDie
    );
  }
  function resolveAttack(game2, attackerPlayer, action, deflect, rollDie, destroy) {
    const defenderPlayer = 1 - attackerPlayer;
    const player = game2.players[attackerPlayer];
    const opponent = game2.players[defenderPlayer];
    const attacker = player.slots[action.slot];
    const defender = opponent.slots[action.target];
    delete attacker.commandedActionAvailable;
    attacker.acted = true;
    attacker.actionUsedThisTurn = true;
    if (getRuneAttribute(attacker) === "frenzy") {
      attacker.attacksUsed = (attacker.attacksUsed ?? 0) + 1;
    }
    const execution = getRuneAttribute(attacker) === "execution" && defender.damage > 0 && getRuneAttribute(defender) !== "intangible";
    if (execution) {
      let prevented = false;
      if (deflect && isDeflecting(defender)) {
        incomingDamage(game2, defender, attacker, 0, defenderPlayer, action.target, rollDie);
        prevented = game2.lastDeflections.at(-1).success;
      }
      if (!prevented) {
        if (getRuneAttribute(defender) === "lightning" && getRuneAttribute(attacker) !== "intangible") {
          disableThroughNextTurn(game2, attacker, attackerPlayer);
        }
        if (getRuneAttribute(defender) === "haunting" && getRuneStats(attacker, player).health > 0) {
          attacker.haunted = true;
        }
        destroy(defenderPlayer, action.target);
      }
      if (getRuneStats(attacker, player).health <= 0) destroy(attackerPlayer, action.slot);
      updateWinner(game2);
      return;
    }
    const lightningAttacks = getRuneAttribute(attacker) === "lightning" && getRuneAttribute(defender) !== "intangible";
    const lightningDefends = getRuneAttribute(defender) === "lightning" && getRuneAttribute(attacker) !== "intangible";
    const damageToAttacker = deflect ? 0 : combatDamage(defender, attacker, opponent, false, game2, attackerPlayer, action.slot);
    const damageToDefender = incomingDamage(
      game2,
      defender,
      attacker,
      combatDamage(attacker, defender, player, true, game2, defenderPlayer, action.target),
      defenderPlayer,
      action.target,
      rollDie,
      deflect
    );
    const lightningAttackDeflected = lightningAttacks && game2.lastDeflections.some((roll) => roll.success && roll.targetPlayer === defenderPlayer && roll.targetSlot === action.target);
    if (lightningAttacks && !lightningAttackDeflected) {
      disableThroughNextTurn(game2, defender, defenderPlayer);
    }
    if (lightningDefends) disableThroughNextTurn(game2, attacker, attackerPlayer);
    const backSlot = action.target + FRONTLINE_SIZE;
    const backRune = getRuneAttribute(attacker) === "powerful" ? opponent.slots[backSlot] : null;
    dealDamage(game2, attacker, damageToAttacker);
    dealDamage(game2, defender, damageToDefender);
    if (backRune && getRuneAttribute(backRune) !== "intangible") {
      dealDamage(game2, backRune, incomingAttributeDamage(game2, backRune, attacker, 1, defenderPlayer, backSlot, rollDie));
    }
    const splinterHits = [];
    function splinterDamage(source, sourcePlayer, targetPlayer, excludedSlot) {
      game2.lastSplinterTriggers.push(sourcePlayer);
      const owner = game2.players[targetPlayer];
      for (let slot = 0; slot < SLOT_COUNT; slot++) {
        const target = owner.slots[slot];
        if (!target || slot === excludedSlot || getRuneAttribute(target) === "intangible") continue;
        dealDamage(game2, target, incomingAttributeDamage(game2, target, source, 1, targetPlayer, slot, rollDie));
        splinterHits.push({ source, sourcePlayer, target, targetPlayer, slot });
      }
    }
    if (getRuneAttribute(attacker) === "splinter" && damageToDefender > 0) {
      splinterDamage(attacker, attackerPlayer, defenderPlayer, action.target);
    }
    if (getRuneAttribute(defender) === "splinter" && damageToAttacker > 0) {
      splinterDamage(defender, defenderPlayer, attackerPlayer, action.slot);
    }
    restoreLeechHealth(game2, attacker, attackerPlayer, action.slot, damageToDefender);
    restoreLeechHealth(game2, defender, defenderPlayer, action.target, damageToAttacker);
    const attackerDestroyed = getRuneStats(attacker, player).health <= 0;
    const defenderDestroyed = getRuneStats(defender, opponent).health <= 0;
    const backDestroyed = backRune && getRuneStats(backRune, opponent).health <= 0;
    if (!attackerDestroyed && (defenderDestroyed && getRuneAttribute(defender) === "haunting" || backDestroyed && getRuneAttribute(backRune) === "haunting")) {
      attacker.haunted = true;
    }
    if (!defenderDestroyed && getRuneAttribute(defender) !== "intangible" && attackerDestroyed && getRuneAttribute(attacker) === "haunting") {
      defender.haunted = true;
    }
    for (const hit of splinterHits) {
      if (getRuneStats(hit.source, game2.players[hit.sourcePlayer]).health > 0 && getRuneStats(hit.target, game2.players[hit.targetPlayer]).health <= 0 && getRuneAttribute(hit.target) === "haunting") {
        hit.source.haunted = true;
      }
    }
    for (const hit of splinterHits.sort((a, b) => b.slot - a.slot)) {
      if (getRuneStats(hit.target, game2.players[hit.targetPlayer]).health <= 0) {
        destroy(hit.targetPlayer, hit.slot);
      }
    }
    if (backDestroyed) destroy(defenderPlayer, backSlot);
    if (attackerDestroyed) destroy(attackerPlayer, action.slot);
    if (defenderDestroyed) destroy(defenderPlayer, action.target);
    updateWinner(game2);
  }
  function countRunes(slots) {
    return slots.filter(Boolean).length;
  }
  function canPlace(slots, slot, card) {
    return !slots[slot] && (slot < FRONTLINE_SIZE || Boolean(slots[slot - FRONTLINE_SIZE]) || card.attribute === "phantom");
  }
  function moveSlots(slots, from, to) {
    if (slots[from]?.snared || slots[to]?.stunned || slots[to]?.snared) return null;
    const result = [...slots];
    [result[from], result[to]] = [result[to], result[from]];
    if (from < FRONTLINE_SIZE && !result[from] && result[from + FRONTLINE_SIZE]?.snared) return null;
    if (to >= FRONTLINE_SIZE && !result[to - FRONTLINE_SIZE] && getRuneAttribute(result[to]) !== "phantom") {
      return null;
    }
    if (from < FRONTLINE_SIZE && !result[from] && result[from + FRONTLINE_SIZE]) {
      result[from] = result[from + FRONTLINE_SIZE];
      result[from + FRONTLINE_SIZE] = null;
    }
    for (let column = 0; column < FRONTLINE_SIZE; column++) {
      if (result[column + FRONTLINE_SIZE] && !result[column] && getRuneAttribute(result[column + FRONTLINE_SIZE]) !== "phantom") {
        return null;
      }
    }
    return result;
  }
  function sameColors(first, second) {
    return first.colors.some((color) => second.colors.includes(color));
  }
  function canUpgradeCard(top, card, attribute = top.attribute) {
    return card.rank === top.rank + 1 && (card.name === cards.transmute.name || attribute === "any-next-rank" || sameColors(top, card));
  }
  function targetCombinations(slots, count) {
    if (count === 0) return [[]];
    return slots.flatMap((slot, index) => targetCombinations(slots.slice(index + 1), count - 1).map((remaining) => [slot, ...remaining]));
  }
  function targetAllocations(slots, count) {
    if (count === 0) return [[]];
    return slots.flatMap((slot, index) => targetAllocations(slots.slice(index), count - 1).map((remaining) => [slot, ...remaining]));
  }
  function transposeSlots(slots, targetSlots) {
    const [first, second] = targetSlots;
    if (first === second || !slots[first] || !slots[second]) return null;
    const result = [...slots];
    [result[first], result[second]] = [result[second], result[first]];
    for (let column = 0; column < FRONTLINE_SIZE; column++) {
      const backline = result[column + FRONTLINE_SIZE];
      if (backline && !result[column] && getRuneAttribute(backline) !== "phantom") return null;
    }
    return result;
  }
  function getLegalActions(game2) {
    if (game2.winner !== null) return [];
    if (game2.pendingDeflection) {
      const player2 = game2.pendingDeflection.player;
      return [{ type: "acceptAttack", player: player2 }, { type: "deflectAttack", player: player2 }];
    }
    if (game2.pendingDrawOffer !== null) {
      const player2 = 1 - game2.pendingDrawOffer;
      return [{ type: "acceptDraw", player: player2 }, { type: "declineDraw", player: player2 }];
    }
    const player = game2.players[game2.currentPlayer];
    const opponent = game2.players[1 - game2.currentPlayer];
    const enemyTargets = opponent.slots.flatMap((target, slot) => target ? [slot] : []);
    const attributeTargets = enemyTargets.filter((slot) => slot < FRONTLINE_SIZE || getRuneAttribute(opponent.slots[slot]) !== "cloak");
    const effectiveTargets = attributeTargets.filter((slot) => getRuneAttribute(opponent.slots[slot]) !== "intangible");
    const actions = [];
    for (let slot = 0; slot < SLOT_COUNT; slot++) {
      if (!player.slots[slot]?.focusChoicePending) continue;
      actions.push({ type: "chooseFocus", slot, sourceSlot: null });
      for (let sourceSlot = 0; sourceSlot < SLOT_COUNT; sourceSlot++) {
        const source = player.slots[sourceSlot];
        if (source && currentCard(source).attribute && currentCard(source).attribute !== "focus") {
          actions.push({ type: "chooseFocus", slot, sourceSlot });
        }
      }
    }
    if (actions.length) return actions;
    if (countRunes(player.slots) < game2.runeLimit) {
      for (const card of player.hand) {
        if (card.rank !== 1) continue;
        for (let slot = 0; slot < SLOT_COUNT; slot++) {
          if (canPlace(player.slots, slot, card)) {
            actions.push({ type: "play", cardId: card.id, slot });
          }
        }
      }
    }
    for (let slot = 0; slot < SLOT_COUNT; slot++) {
      const rune = player.slots[slot];
      if (!rune || rune.stunned || isRuneDisabled(game2, game2.currentPlayer, slot)) continue;
      if (!rune.moved && !rune.snared) {
        for (let target = 0; target < SLOT_COUNT; target++) {
          if (target !== slot && !isRuneDisabled(game2, game2.currentPlayer, target) && moveSlots(player.slots, slot, target)) {
            actions.push({ type: "move", from: slot, to: target });
          }
        }
      }
      const top = currentCard(rune);
      const attribute = getRuneAttribute(rune);
      const secondFrenzyAttack = attribute === "frenzy" && rune.attacksUsed === 1;
      const frenzyCanAttack = attribute !== "frenzy" || (rune.attacksUsed ?? 0) < 2 || rune.commandedActionAvailable;
      const frenzyHasNotSpentActionWithoutAttacking = attribute !== "frenzy" || (rune.attacksUsed ?? 0) > 0 || !rune.actionUsedThisTurn;
      const firstTurnUpgrade = ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE && game2.turn === 2 && player.turnsStarted === 0 && rune.stack.length === 1 && top.rank === 1;
      if (!rune.acted || firstTurnUpgrade) {
        for (const card of player.hand) {
          if (canUpgradeCard(top, card, attribute)) {
            actions.push({ type: "upgrade", slot, cardId: card.id });
          }
        }
      }
      if (rune.acted && !secondFrenzyAttack) continue;
      if (attribute === "mending") {
        for (let targetSlot = 0; targetSlot < SLOT_COUNT; targetSlot++) {
          const target = player.slots[targetSlot];
          if (target && target.damage > 0) {
            actions.push({ type: "attribute", slot, targetPlayer: game2.currentPlayer, targetSlot });
          }
        }
      }
      if (attribute === "bolt") {
        for (let amount = 1; amount <= getRuneStats(rune, player).health && effectiveTargets.length; amount++) {
          for (const targetSlots of targetAllocations(effectiveTargets, amount)) {
            actions.push({ type: "attribute", slot, targetPlayer: 1 - game2.currentPlayer, targetSlots });
          }
        }
      }
      if (attribute === "amplifying" || attribute === "infusion") {
        for (let targetSlot = 0; targetSlot < SLOT_COUNT; targetSlot++) {
          if (targetSlot !== slot && player.slots[targetSlot]) {
            actions.push({ type: "attribute", slot, targetPlayer: game2.currentPlayer, targetSlot });
          }
        }
      }
      if (attribute === "soulbind") {
        for (let targetSlot = 0; targetSlot < SLOT_COUNT; targetSlot++) {
          const target = player.slots[targetSlot];
          if (targetSlot !== slot && target && getRuneAttribute(target) !== "soulbind") {
            actions.push({ type: "attribute", slot, targetPlayer: game2.currentPlayer, targetSlot });
          }
        }
      }
      if (attribute === "martyr" || attribute === "command") {
        for (let targetSlot = 0; targetSlot < SLOT_COUNT; targetSlot++) {
          const target = player.slots[targetSlot];
          if (targetSlot !== slot && target?.actionUsedThisTurn && target.acted) {
            actions.push({ type: "attribute", slot, targetPlayer: game2.currentPlayer, targetSlot });
          }
        }
      }
      if (attribute === "recall") {
        for (let targetSlot = 0; targetSlot < SLOT_COUNT; targetSlot++) {
          if (targetSlot !== slot && player.slots[targetSlot]) {
            actions.push({ type: "attribute", slot, targetPlayer: game2.currentPlayer, targetSlot });
          }
        }
      }
      if (attribute === "snare" || attribute === "fire" || attribute === "magma" || attribute === "soul" || attribute === "spectral" && slot < FRONTLINE_SIZE) {
        for (const targetSlot of effectiveTargets) {
          actions.push({ type: "attribute", slot, targetPlayer: 1 - game2.currentPlayer, targetSlot });
        }
      }
      if (attribute === "acid") {
        if (effectiveTargets.length) {
          for (const targetSlots of targetCombinations(effectiveTargets, Math.min(3, effectiveTargets.length))) {
            actions.push({ type: "attribute", slot, targetPlayer: 1 - game2.currentPlayer, targetSlots });
          }
        }
      }
      if (attribute === "fire-ball") {
        for (const targetSlot of effectiveTargets) {
          const targetSlots = attributeTargets.filter((other) => other !== targetSlot);
          actions.push({ type: "attribute", slot, targetPlayer: 1 - game2.currentPlayer, targetSlot, targetSlots });
        }
      }
      if (slot < FRONTLINE_SIZE && frenzyCanAttack && frenzyHasNotSpentActionWithoutAttacking && (!rune.acted || secondFrenzyAttack)) {
        if (attribute === "masterful") {
          const maxCost = Math.min(4, getRuneStats(rune, player).health);
          for (let amount = 1; amount <= maxCost && effectiveTargets.length; amount++) {
            for (const targetSlots of targetAllocations(effectiveTargets, amount)) {
              actions.push({ type: "attribute", slot, targetPlayer: 1 - game2.currentPlayer, targetSlots });
            }
          }
        }
        if (attribute === "transpose") {
          for (const targetSlots of targetCombinations(effectiveTargets, 2)) {
            if (transposeSlots(opponent.slots, targetSlots)) {
              actions.push({ type: "attribute", slot, targetPlayer: 1 - game2.currentPlayer, targetSlots });
            }
          }
        }
        for (let target = 0; target < FRONTLINE_SIZE; target++) {
          if (opponent.slots[target]) {
            actions.push({ type: "attack", slot, target });
          }
        }
      }
    }
    if (player.turnsStarted > 0 || countRunes(player.slots) > 0) {
      actions.push({ type: "endTurn" });
    }
    return actions;
  }
  function actionMatches(legal, requested) {
    const keys = Object.keys(legal);
    return requested && typeof requested === "object" && Object.keys(requested).length === keys.length && keys.every((key) => Array.isArray(legal[key]) ? Array.isArray(requested[key]) && requested[key].length === legal[key].length && legal[key].slice().sort((a, b) => a - b).every((value2, index) => value2 === requested[key].slice().sort((a, b) => a - b)[index]) : requested[key] === legal[key]);
  }
  function takeCard(player, cardId) {
    const index = player.hand.findIndex((card) => card.id === cardId);
    return player.hand.splice(index, 1)[0];
  }
  function destroyRune(player, slot, phoenixReturnsToHand = false) {
    const rune = player.slots[slot];
    const returnedCard = phoenixReturnsToHand ? rune.stack.at(-1) : null;
    player.destroyed.push(...rune.stack.filter((card) => card !== returnedCard));
    if (returnedCard) player.hand.push(returnedCard);
    player.slots[slot] = null;
    if (slot < FRONTLINE_SIZE && player.slots[slot + FRONTLINE_SIZE]) {
      player.slots[slot] = player.slots[slot + FRONTLINE_SIZE];
      player.slots[slot + FRONTLINE_SIZE] = null;
    }
  }
  function clearSoulbindTarget(game2, targetId) {
    for (const player of game2.players) {
      for (const rune of player.slots) {
        if (rune?.soulbinds === targetId) delete rune.soulbinds;
      }
    }
  }
  function returnRuneToHand(game2, player, slot) {
    const rune = player.slots[slot];
    clearSoulbindTarget(game2, rune.stack[0].id);
    player.hand.push(...rune.stack);
    player.slots[slot] = null;
    if (slot < FRONTLINE_SIZE && player.slots[slot + FRONTLINE_SIZE]) {
      player.slots[slot] = player.slots[slot + FRONTLINE_SIZE];
      player.slots[slot + FRONTLINE_SIZE] = null;
    }
  }
  function updateWinner(game2) {
    const empty = game2.players.map((player) => countRunes(player.slots) === 0);
    if (empty[0] && empty[1]) {
      game2.winner = "draw";
    } else if (empty[0] !== empty[1]) {
      game2.winner = empty[0] ? 1 : 0;
    }
  }
  function progressSnapshot(game2) {
    return game2.players.map((player) => player.slots.filter(Boolean).map((rune) => [
      rune.stack[0].id,
      rune.stack.map((card) => card.id),
      rune.damage,
      rune.temporaryHealth,
      Boolean(rune.haunted),
      Boolean(rune.stunned),
      Boolean(rune.snared),
      rune.lightningDisabledThroughTurn ?? null,
      rune.focusCopy ?? null,
      rune.spectralEffect?.target ?? null,
      rune.amplifies ?? null,
      rune.soulbinds ?? null,
      rune.amplification ?? 0,
      rune.infusionAttackBonus ?? 0,
      Boolean(rune.commandedActionAvailable)
    ]).sort((a, b) => a[0].localeCompare(b[0])));
  }
  function actionCouldDealDamage(game2, action) {
    if (action.type === "attack") return true;
    if (action.type === "acceptAttack" || action.type === "deflectAttack") return true;
    if (action.type !== "attribute") return false;
    return DAMAGE_ATTRIBUTES.has(getRuneAttribute(game2.players[game2.currentPlayer].slots[action.slot]));
  }
  function isSpectralStalemate(game2) {
    if (game2.players.some((player) => countRunes(player.slots) !== 1 || player.hand.some((card) => card.rank === 1))) return false;
    for (let owner = 0; owner < game2.players.length; owner++) {
      const player = game2.players[owner];
      const opponent = game2.players[1 - owner];
      const sourceSlot = player.slots.findIndex(Boolean);
      const targetSlot = opponent.slots.findIndex(Boolean);
      const source = player.slots[sourceSlot];
      const target = opponent.slots[targetSlot];
      if (sourceSlot >= FRONTLINE_SIZE || targetSlot >= FRONTLINE_SIZE || currentCard(source).attribute !== "spectral" || source.spectralEffect?.target !== target.stack[0].id || currentCard(target).attribute === "focus" || source.stunned || isRuneDisabled(game2, owner, sourceSlot) || !isRuneDisabled(game2, 1 - owner, targetSlot) || isDeflecting(target) || player.hand.some((card) => canUpgradeCard(currentCard(source), card, getRuneAttribute(source)))) continue;
      if (combatDamage(target, source, opponent, false, game2, owner, sourceSlot) >= getRuneStats(source, player).health && combatDamage(source, target, player, true, game2, 1 - owner, targetSlot) < getRuneStats(target, opponent).health) return true;
    }
    return false;
  }
  function applyAction(game2, action, rollDie = () => Math.floor(Math.random() * 6) + 1) {
    const concession = actionMatches({ type: "concede", player: 0 }, action) || actionMatches({ type: "concede", player: 1 }, action);
    const offer = game2.pendingDrawOffer === null && actionMatches({ type: "offerDraw", player: game2.currentPlayer }, action) && !getLegalActions(game2).some((legal) => legal.type === "chooseFocus");
    if (game2.winner !== null || !concession && !offer && !getLegalActions(game2).some((legal) => actionMatches(legal, action))) {
      throw new Error("Illegal action.");
    }
    const next = structuredClone(game2);
    const player = next.players[next.currentPlayer];
    const opponent = next.players[1 - next.currentPlayer];
    next.lastRoll = null;
    next.lastDeflections = [];
    next.lastNecroticRolls = [];
    next.lastPhoenixRolls = [];
    next.lastSplinterTriggers = [];
    next.lastLeechHeals = [];
    next.lastSoulbindRedirects = [];
    const destroyedRunes = [];
    function destroy(playerIndex, slot) {
      const owner = next.players[playerIndex];
      const rune = owner.slots[slot];
      clearSoulbindTarget(next, rune.stack[0].id);
      destroyedRunes.push({ playerIndex, card: currentCard(rune).name });
      let phoenixReturnsToHand = false;
      if (getRuneAttribute(rune) === "phoenix") {
        const value2 = rollSixSided(rollDie);
        phoenixReturnsToHand = value2 >= 4;
        next.lastPhoenixRolls.push({ player: playerIndex, slot, card: currentCard(rune).name, value: value2, success: phoenixReturnsToHand });
      }
      destroyRune(owner, slot, phoenixReturnsToHand);
    }
    switch (action.type) {
      case "concede": {
        next.winner = 1 - action.player;
        next.pendingDrawOffer = null;
        break;
      }
      case "offerDraw": {
        next.pendingDrawOffer = action.player;
        break;
      }
      case "acceptDraw": {
        next.pendingDrawOffer = null;
        next.winner = "draw";
        next.drawReason = "agreement";
        break;
      }
      case "declineDraw": {
        next.pendingDrawOffer = null;
        break;
      }
      case "chooseFocus": {
        const rune = player.slots[action.slot];
        const source = action.sourceSlot === null ? null : currentCard(player.slots[action.sourceSlot]);
        const sourceRune = action.sourceSlot === null ? null : player.slots[action.sourceSlot];
        rune.focusCopy = source ? {
          attribute: source.attribute,
          name: source.name,
          attributeText: source.attributeText,
          sourceRuneId: sourceRune.stack[0].id
        } : null;
        delete rune.focusChoicePending;
        if (getRuneStats(rune, player).health <= 0) {
          destroy(next.currentPlayer, action.slot);
          updateWinner(next);
        }
        break;
      }
      case "play": {
        const card = takeCard(player, action.cardId);
        player.slots[action.slot] = { stack: [card], damage: 0, temporaryHealth: 0, amplification: 0, infusionAttackBonus: 0, moved: false, acted: true, actionUsedThisTurn: false, haunted: false, stunned: false };
        break;
      }
      case "move": {
        const rune = player.slots[action.from];
        player.slots = moveSlots(player.slots, action.from, action.to);
        rune.moved = true;
        for (const backRune of player.slots.slice(FRONTLINE_SIZE)) {
          if (backRune) delete backRune.spectralEffect;
        }
        break;
      }
      case "upgrade": {
        const rune = player.slots[action.slot];
        delete rune.spectralEffect;
        delete rune.amplifies;
        delete rune.soulbinds;
        delete rune.commandedActionAvailable;
        delete rune.focusCopy;
        delete rune.focusChoicePending;
        rune.stack.push(takeCard(player, action.cardId));
        rune.acted = true;
        rune.actionUsedThisTurn = true;
        if (getRuneStats(rune, player).health <= 0) {
          destroy(next.currentPlayer, action.slot);
          updateWinner(next);
        }
        break;
      }
      case "attribute": {
        const source = player.slots[action.slot];
        const attribute = getRuneAttribute(source);
        delete source.commandedActionAvailable;
        source.acted = true;
        source.actionUsedThisTurn = true;
        if (attribute === "masterful") {
          dealDamage(next, source, action.targetSlots.length);
          for (const slot of action.targetSlots) {
            const target2 = opponent.slots[slot];
            if (getRuneAttribute(target2) !== "intangible") {
              dealDamage(next, target2, incomingAttributeDamage(next, target2, source, 1, action.targetPlayer, slot, rollDie));
            }
          }
          for (const slot of [...new Set(action.targetSlots)].sort((a, b) => b - a)) {
            const target2 = opponent.slots[slot];
            if (getRuneStats(target2, opponent).health <= 0) {
              if (getRuneStats(source, player).health > 0 && getRuneAttribute(target2) === "haunting") {
                source.haunted = true;
              }
              destroy(action.targetPlayer, slot);
            }
          }
          if (getRuneStats(source, player).health <= 0) destroy(next.currentPlayer, action.slot);
          updateWinner(next);
          break;
        }
        if (attribute === "bolt") {
          dealDamage(next, source, action.targetSlots.length);
          const targets = [...new Set(action.targetSlots)].sort((a, b) => a - b);
          for (const slot of targets) {
            const target2 = opponent.slots[slot];
            const amount = action.targetSlots.filter((targetSlot) => targetSlot === slot).length;
            dealDamage(next, target2, incomingAttributeDamage(next, target2, source, amount, action.targetPlayer, slot, rollDie));
          }
          for (const slot of targets.reverse()) {
            const target2 = opponent.slots[slot];
            if (getRuneStats(target2, opponent).health <= 0) {
              if (getRuneStats(source, player).health > 0 && getRuneAttribute(target2) === "haunting") {
                source.haunted = true;
              }
              destroy(action.targetPlayer, slot);
            }
          }
          if (getRuneStats(source, player).health <= 0) destroy(next.currentPlayer, action.slot);
          updateWinner(next);
          break;
        }
        if (attribute === "transpose") {
          const targetPlayer = next.players[action.targetPlayer];
          targetPlayer.slots = transposeSlots(targetPlayer.slots, action.targetSlots);
          for (const backRune of targetPlayer.slots.slice(FRONTLINE_SIZE)) {
            if (backRune) delete backRune.spectralEffect;
          }
          break;
        }
        if (attribute === "acid" || attribute === "fire-ball") {
          const targets = attribute === "fire-ball" ? [action.targetSlot, ...action.targetSlots] : action.targetSlots;
          for (const slot of [...targets].sort((a, b) => a - b)) {
            const target2 = opponent.slots[slot];
            if (getRuneAttribute(target2) !== "intangible") {
              const damage = attribute === "fire-ball" && slot === action.targetSlot ? 2 : 1;
              dealDamage(next, target2, incomingAttributeDamage(next, target2, source, damage, 1 - next.currentPlayer, slot, rollDie));
            }
          }
          for (const slot of [...targets].sort((a, b) => b - a)) {
            const target2 = opponent.slots[slot];
            if (getRuneStats(target2, opponent).health <= 0) destroy(1 - next.currentPlayer, slot);
          }
          destroy(next.currentPlayer, action.slot);
          updateWinner(next);
          break;
        }
        if (attribute === "martyr") {
          player.slots[action.targetSlot].acted = false;
          destroy(next.currentPlayer, action.slot);
          updateWinner(next);
          break;
        }
        if (attribute === "command") {
          const target2 = player.slots[action.targetSlot];
          target2.acted = false;
          target2.commandedActionAvailable = true;
          break;
        }
        if (attribute === "recall") {
          returnRuneToHand(next, player, action.targetSlot);
          updateWinner(next);
          break;
        }
        const target = next.players[action.targetPlayer].slots[action.targetSlot];
        if (attribute === "infusion") {
          target.infusionAttackBonus = (target.infusionAttackBonus ?? 0) + 2;
          dealDamage(next, source, 1);
          if (getRuneStats(source, player).health <= 0) destroy(next.currentPlayer, action.slot);
          updateWinner(next);
          break;
        }
        if (attribute === "snare") {
          target.snared = true;
          break;
        }
        if (attribute === "mending") {
          target.damage--;
          break;
        }
        if (attribute === "amplifying") {
          source.amplifies = target.stack[0].id;
          break;
        }
        if (attribute === "soulbind") {
          for (const rune of player.slots) {
            if (rune?.soulbinds === target.stack[0].id) delete rune.soulbinds;
          }
          source.soulbinds = target.stack[0].id;
          break;
        }
        if (attribute === "spectral") {
          if (getRuneAttribute(target) !== "intangible") {
            source.spectralEffect = { target: target.stack[0].id, order: next.nextSpectralEffectId++ };
          }
          break;
        }
        if (attribute !== "fire" && attribute !== "magma" && attribute !== "soul") {
          throw new Error("Unsupported active attribute.");
        }
        let success = true;
        if (attribute === "magma" || attribute === "soul") {
          const value2 = rollSixSided(rollDie);
          success = value2 >= 3;
          next.lastRoll = { card: currentCard(source).name, value: value2, success };
          if (success && attribute === "soul") {
            if (source.damage > 0) source.damage--;
            else source.temporaryHealth++;
          }
        }
        if (success && getRuneAttribute(target) !== "intangible") {
          const damage = attribute === "soul" ? 1 : 2;
          dealDamage(next, target, incomingAttributeDamage(next, target, source, damage, action.targetPlayer, action.targetSlot, rollDie));
          if (getRuneStats(target, opponent).health <= 0) {
            if ((attribute === "magma" || attribute === "soul") && getRuneAttribute(target) === "haunting") {
              source.haunted = true;
            }
            destroy(1 - next.currentPlayer, action.targetSlot);
          }
        }
        if (attribute === "fire" || getRuneStats(source, player).health <= 0) destroy(next.currentPlayer, action.slot);
        updateWinner(next);
        break;
      }
      case "attack": {
        const attackerPlayer = next.currentPlayer;
        const defender = opponent.slots[action.target];
        if (isDeflecting(defender)) {
          next.pendingDeflection = {
            attackerPlayer,
            player: 1 - attackerPlayer,
            slot: action.slot,
            target: action.target
          };
          next.currentPlayer = 1 - attackerPlayer;
        } else {
          resolveAttack(next, attackerPlayer, action, false, rollDie, destroy);
        }
        break;
      }
      case "acceptAttack":
      case "deflectAttack": {
        const pending = next.pendingDeflection;
        next.pendingDeflection = null;
        next.currentPlayer = pending.attackerPlayer;
        resolveAttack(
          next,
          pending.attackerPlayer,
          { slot: pending.slot, target: pending.target },
          action.type === "deflectAttack",
          rollDie,
          destroy
        );
        break;
      }
      case "endTurn": {
        for (const rune of player.slots) {
          if (rune) {
            rune.stunned = false;
            delete rune.snared;
          }
        }
        player.turnsStarted++;
        next.currentPlayer = 1 - next.currentPlayer;
        next.turn++;
        for (const owner of next.players) {
          for (const rune of owner.slots) {
            if (rune && rune.lightningDisabledThroughTurn !== void 0 && rune.lightningDisabledThroughTurn < next.turn) {
              delete rune.lightningDisabledThroughTurn;
            }
          }
        }
        const incoming = next.players[next.currentPlayer];
        for (const rune of incoming.slots) {
          if (rune) {
            delete rune.spectralEffect;
            delete rune.amplifies;
            delete rune.soulbinds;
            delete rune.infusionAttackBonus;
            delete rune.commandedActionAvailable;
            rune.moved = false;
            rune.acted = false;
            rune.actionUsedThisTurn = false;
            delete rune.attacksUsed;
          }
        }
        for (let slot = 0; slot < SLOT_COUNT; slot++) {
          const rune = incoming.slots[slot];
          if (!rune) continue;
          const attribute = getRuneAttribute(rune);
          if (attribute === "growth") {
            if (rune.damage > 0) rune.damage--;
            else rune.temporaryHealth++;
          }
        }
        const destroyedFocusSlots = [];
        for (let slot = 0; slot < SLOT_COUNT; slot++) {
          const rune = incoming.slots[slot];
          if (!rune || currentCard(rune).attribute !== "focus") continue;
          if (rune.stunned || isRuneDisabled(next, next.currentPlayer, slot)) {
            rune.focusCopy = null;
            delete rune.focusChoicePending;
            if (getRuneStats(rune, incoming).health <= 0) destroyedFocusSlots.push(slot);
          } else {
            rune.focusChoicePending = true;
          }
        }
        for (const slot of destroyedFocusSlots.sort((a, b) => b - a)) destroy(next.currentPlayer, slot);
        if (destroyedFocusSlots.length) updateWinner(next);
        break;
      }
    }
    const lethalSoulbinds = next.players.map((owner) => owner.slots.flatMap((rune) => rune && getRuneAttribute(rune) === "soulbind" && getRuneStats(rune, owner).health <= 0 ? [rune.stack[0].id] : []));
    for (let owner = 0; owner < lethalSoulbinds.length; owner++) {
      for (const id of lethalSoulbinds[owner]) {
        const slot = next.players[owner].slots.findIndex((rune) => rune?.stack[0].id === id);
        if (slot >= 0) destroy(owner, slot);
      }
    }
    if (lethalSoulbinds.some((ids) => ids.length > 0)) updateWinner(next);
    for (const destroyed of destroyedRunes) {
      const owner = next.players[destroyed.playerIndex];
      for (let slot = 0; slot < SLOT_COUNT; slot++) {
        const rune = owner.slots[slot];
        if (!rune || getRuneAttribute(rune) !== "necrotic" || isRuneDisabled(next, destroyed.playerIndex, slot)) continue;
        const value2 = rollSixSided(rollDie);
        const success = value2 >= 3;
        next.lastNecroticRolls.push({ player: destroyed.playerIndex, slot, destroyed: destroyed.card, value: value2, success });
        if (success) {
          owner.hand.push({
            ...cards.haunting,
            id: `${destroyed.playerIndex}-necrotic-${owner.nextGeneratedCardId++}`,
            colors: [...cards.haunting.colors]
          });
        }
      }
    }
    refreshAmplifications(next);
    if (next.winner === null && !next.pendingDeflection && isSpectralStalemate(next)) {
      next.winner = "draw";
      next.drawReason = "spectral-stalemate";
    }
    const progressed = actionCouldDealDamage(game2, action) || game2.turnHadProgress || JSON.stringify(progressSnapshot(game2)) !== JSON.stringify(progressSnapshot(next)) || next.lastDeflections.some((roll) => roll.returned > 0);
    if (action.type === "endTurn") {
      next.noProgressTurns = progressed ? 0 : game2.noProgressTurns + 1;
      next.turnHadProgress = false;
      if (next.winner === null && next.noProgressTurns >= NO_PROGRESS_TURN_LIMIT) {
        next.winner = "draw";
        next.drawReason = "no-progress";
      }
    } else {
      next.turnHadProgress = progressed;
    }
    return next;
  }

  // src/decks.js
  var STORAGE_KEY = "rune-manic.saved-decks.v1";
  var cardKeys = new Map(Object.entries(cards).map(([key, card]) => [card, key]));
  var cardsByName = new Map(Object.values(cards).map((card) => [card.name.toLowerCase(), card]));
  var prebuiltDecks = [
    {
      id: "arcane",
      name: "Arcane",
      deck: [
        cards.deflecting,
        cards.deflecting,
        cards.deflecting,
        cards.deflecting,
        cards.mending,
        cards.mending,
        cards.deflectingMajor,
        cards.deflectingMajor,
        cards.lightning,
        cards.acid,
        cards.fireBall,
        cards.intangible,
        cards.magma
      ]
    },
    {
      id: "specter",
      name: "Specter",
      deck: [
        cards.haunting,
        cards.haunting,
        cards.haunting,
        cards.haunting,
        cards.haunting,
        cards.haunting,
        cards.spectral,
        cards.spectral,
        cards.fortitude,
        cards.fortitude,
        cards.necrotic,
        cards.torment,
        cards.soul
      ]
    },
    {
      id: "standfast",
      name: "Standfast",
      deck: [
        cards.hardened,
        cards.hardened,
        cards.hardened,
        cards.bolt,
        cards.bolt,
        cards.bolt,
        cards.hardenedMajor,
        cards.hardenedMajor,
        cards.doubleBolt,
        cards.doubleBolt,
        cards.amplifying,
        cards.focus,
        cards.splinter
      ]
    },
    {
      id: "uprising",
      name: "Uprising",
      deck: [
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.piercing,
        cards.uprising,
        cards.uprising,
        cards.uprising,
        cards.piercingMajor,
        cards.powerful,
        cards.masterful
      ]
    },
    {
      id: "mixed",
      name: "Mixed",
      deck: [
        cards.brawling,
        cards.brawling,
        cards.piercing,
        cards.piercing,
        cards.deflecting,
        cards.deflectingMajor,
        cards.intangible,
        cards.magma,
        cards.haunting,
        cards.haunting,
        cards.haunting,
        cards.spectral,
        cards.hardened,
        cards.hardenedMajor
      ]
    },
    {
      id: "brawling-uprising",
      name: "Brawling Uprising",
      deck: [
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.brawling,
        cards.uprising,
        cards.uprising,
        cards.uprising,
        cards.uprising,
        cards.uprising,
        cards.powerful
      ]
    }
  ];
  function deckRank(deck) {
    return deck.reduce((total, card) => total + card.rank, 0);
  }
  function formatDeckList(deck) {
    const counts = /* @__PURE__ */ new Map();
    for (const card of deck) {
      if (!cardKeys.has(card)) throw new Error("A deck contains an unknown card.");
      counts.set(card, (counts.get(card) ?? 0) + 1);
    }
    return [...counts].map(([card, count]) => `${count}x ${card.name}`).join("\n");
  }
  function parseDeckList(text) {
    if (typeof text !== "string") throw new Error("Enter a text deck list.");
    const deck = [];
    let totalRank = 0;
    for (const [index, raw] of text.split(/\r?\n/).entries()) {
      const line = raw.trim();
      if (!line) continue;
      const match = line.match(/^(\d+)(?:\s*[xX]\s*|\s+)(.+)$/);
      if (!match && /^\d/.test(line)) throw new Error(`Line ${index + 1}: use a quantity followed by a card name.`);
      const count = match ? Number(match[1]) : 1;
      if (!Number.isSafeInteger(count) || count < 1) throw new Error(`Line ${index + 1}: quantity must be a positive whole number.`);
      const name = (match ? match[2] : line).trim();
      const card = cardsByName.get(name.toLowerCase());
      if (!card) throw new Error(`Line ${index + 1}: unknown card "${name}".`);
      totalRank += count * card.rank;
      if (totalRank > DECK_RANK_LIMIT) throw new Error(`Line ${index + 1}: a deck cannot exceed 24 total ranks.`);
      for (let i = 0; i < count; i++) deck.push(card);
    }
    validateDeck(deck);
    return deck;
  }
  function generateRandomDeck(random = Math.random) {
    const catalog = Object.values(cards);
    const starters = catalog.filter((card) => card.rank === 1);
    const pick = (options) => {
      const roll = random();
      if (!Number.isFinite(roll) || roll < 0 || roll >= 1) {
        throw new Error("Random deck generation requires a number between 0 and 1.");
      }
      return options[Math.floor(roll * options.length)];
    };
    const chains = Array.from({ length: 6 }, () => [pick(starters)]);
    let total = chains.length;
    while (total < DECK_RANK_LIMIT) {
      const remaining = DECK_RANK_LIMIT - total;
      const options = starters.map((card2) => ({ card: card2, chain: null }));
      for (const chain2 of chains) {
        const top = chain2[chain2.length - 1];
        for (const card2 of catalog) {
          if (card2.rank <= remaining && canUpgradeCard(top, card2)) options.push({ card: card2, chain: chain2 });
        }
      }
      const { card, chain } = pick(options);
      if (chain) chain.push(card);
      else chains.push([card]);
      total += card.rank;
    }
    return chains.flat();
  }
  function chooseRandomDeck(savedDecks2, random = Math.random) {
    const choices = [...prebuiltDecks, ...savedDecks2];
    const roll = random();
    if (!Number.isFinite(roll) || roll < 0 || roll >= 1) {
      throw new Error("Random deck selection requires a number between 0 and 1.");
    }
    return choices[Math.floor(roll * choices.length)];
  }
  function loadSavedDecks(storage) {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    let records;
    try {
      records = JSON.parse(raw);
    } catch (error) {
      throw new Error("Saved deck data is not valid JSON.", { cause: error });
    }
    if (!Array.isArray(records)) throw new Error("Saved deck data is invalid.");
    const names = /* @__PURE__ */ new Set();
    return records.map((record) => {
      if (!record || typeof record.name !== "string" || !record.name.trim() || record.name !== record.name.trim() || record.name.length > 60 || !Array.isArray(record.cards) || names.has(record.name.toLowerCase())) {
        throw new Error("Saved deck data contains an invalid deck.");
      }
      const migratedKeys = record.cards.map((key) => key === "regrowth" ? "soulbind" : key);
      if (migratedKeys.some((key) => typeof key !== "string" || !Object.hasOwn(cards, key))) {
        throw new Error("Saved deck data contains an invalid deck.");
      }
      names.add(record.name.toLowerCase());
      const deck = migratedKeys.map((key) => cards[key]);
      validateDeck(deck);
      return { name: record.name, deck };
    });
  }
  function saveDeck(storage, name, deck, overwrite = false) {
    if (typeof name !== "string") throw new Error("Enter a deck name of 1-60 characters.");
    const trimmed = name.trim();
    if (!trimmed || trimmed.length > 60) throw new Error("Enter a deck name of 1-60 characters.");
    validateDeck(deck);
    const keys = deck.map((card) => {
      const key = cardKeys.get(card);
      if (!key) throw new Error("A deck contains an unknown card.");
      return key;
    });
    const saved = loadSavedDecks(storage);
    const index = saved.findIndex((entry2) => entry2.name.toLowerCase() === trimmed.toLowerCase());
    if (index >= 0 && !overwrite) throw new Error("A saved deck already has that name.");
    const entry = { name: trimmed, deck: [...deck] };
    if (index >= 0) saved[index] = entry;
    else saved.push(entry);
    storage.setItem(STORAGE_KEY, JSON.stringify(saved.map((item) => ({
      name: item.name,
      cards: item === entry ? keys : item.deck.map((card) => cardKeys.get(card))
    }))));
    return saved;
  }
  function deleteSavedDeck(storage, name) {
    if (typeof name !== "string" || !name.trim() || name.trim().length > 60) {
      throw new Error("Enter a deck name of 1-60 characters.");
    }
    const saved = loadSavedDecks(storage);
    const index = saved.findIndex((entry) => entry.name.toLowerCase() === name.trim().toLowerCase());
    if (index < 0) throw new Error("A saved deck with that name does not exist.");
    saved.splice(index, 1);
    storage.setItem(STORAGE_KEY, JSON.stringify(saved.map((item) => ({
      name: item.name,
      cards: item.deck.map((card) => cardKeys.get(card))
    }))));
    return saved;
  }

  // src/rune-rules.js
  var rulings = [
    [["hardened", "piercing", "piercing-major"], "Hardened reduces each incoming hit by 1 while defending, including damage from enemy attributes in either row. It does not reduce an attacker's retaliation damage or its own attribute costs. Piercing and Piercing Major ignore this damage reduction; Piercing can upgrade to Piercing Major."],
    [["any-next-rank"], "This rune can upgrade to any rune of the next rank, regardless of colour."],
    [["brawling", "uprising"], "Uprising counts only its owner's visible Brawling runes. Brawling underneath an upgrade does not count, and Focus copying Brawling is not a Brawling card."],
    [["fortitude"], "The health bonus and attack penalty remain in effect while defending, including when disabled."],
    [["piercing-major"], "Piercing Major also gains +1 attack, except that defending Intangible ignores this bonus."],
    [["mending"], "Mending uses an action to restore 1 damage to a damaged friendly rune, including itself, a friendly rune in the backline, or friendly Intangible. It cannot target an opponent's rune or an undamaged rune, or restore lost temporary health."],
    [["powerful"], "Powerful damages the rune originally behind its target before that rune moves forward, even if Powerful or its target is destroyed in combat."],
    [["haunting"], "Haunting curses a surviving rune that destroys it through combat or an attribute, whether Haunting was attacking or defending. The -1 attack penalty remains through upgrades and is not cumulative."],
    [["fire", "magma"], "Fire and Magma target only enemy runes, including those in the backline. If Fire destroys both players' last runes, the round is a draw."],
    [["magma"], "Magma chooses its target before rolling a six-sided die and uses its action even on a failed roll. On 3+ it deals 2 damage."],
    [["intangible", "haunting", "fortitude", "piercing-major", "uprising"], "Defending Intangible ignores positive attack bonuses from the attacker's own attributes, but Haunting's existing penalty and Fortitude's attack penalty still apply. Intangible is immune to Haunting's curse while defending; if it attacks and destroys Haunting, it is cursed."],
    [["intangible", "fire", "magma", "mending"], "Intangible cannot be selected by enemy attributes that cannot affect it, including Fire and Magma. Mending may heal friendly Intangible."],
    [["intangible", "powerful"], "Powerful still damages the rune behind a defending Intangible. An Intangible behind the target is immune to that extra damage."],
    [["acid", "intangible"], "Acid uses an action to deal 1 damage to three different enemy runes, including backline runes, then destroys its source. It targets all eligible enemies if fewer than three are available. Intangible cannot be selected."],
    [["fire-ball", "intangible"], "Fire Ball uses an action to deal 2 damage to one enemy and 1 damage to up to three other enemies, including backline runes, then destroys its source. Intangible cannot be the main target and is immune to the automatic additional damage."],
    [["deflecting", "deflecting-major", "piercing", "piercing-major", "powerful", "bolt", "fire", "magma", "acid", "fire-ball", "lightning", "soul", "splinter", "masterful"], "When directly attacked, Deflecting and Deflecting Major's owner chooses to deflect or take the normal attack, including retaliation. If deflecting, roll a six-sided die: on 1-3 they take the damage and deal no normal combat damage; on 4+ they negate it. Deflecting returns 1 damage on 6, while Deflecting Major returns 1 on 4+. Damaging attributes and extra hits still trigger deflection automatically. Piercing does not bypass deflection."],
    [["deflecting", "deflecting-major", "magma", "powerful", "acid", "fire-ball", "splinter", "masterful"], "Deflecting rolls only if Magma's own roll succeeds. Each hit Deflecting rune rolls separately, and all selected effects resolve even if returned damage destroys their source. Returned damage cannot itself be deflected. Powerful still damages the rune behind a successfully deflecting defender."],
    [["intangible", "deflecting", "deflecting-major"], "Intangible attacking Deflecting can have its attack negated and take returned damage; its combat immunity applies while defending."],
    [["lightning", "hardened"], "Lightning deals normal combat and retaliation damage. When it attacks, it disables the defending rune; when it is attacked, it disables the attacking rune. The disable lasts through the end of the target's next full turn, even if Lightning is destroyed or the target was already taking its turn. Hardened reduces damage normally but does not prevent the disable."],
    [["lightning", "intangible", "deflecting", "deflecting-major"], "A successful Deflecting roll against Lightning's attack prevents the attack damage and disable; a failed roll leaves both. Intangible is immune to Lightning's disable in either role. When defending Intangible is attacked by Lightning, it ignores Lightning's effect and takes normal combat damage."],
    [["soul", "intangible", "deflecting", "deflecting-major"], "Soul chooses an enemy target, including in the backline, before rolling a six-sided die. Intangible cannot be selected. On 3+ Soul gains 1 hit point even if damage is negated. Soul heals existing damage first, then gains unlimited temporary health above its normal maximum. Lost temporary health cannot be restored."],
    [["soul", "deflecting", "deflecting-major"], "Soul gains its hit point before taking any returned deflection damage."],
    [["necrotic", "haunting"], "Each surviving, enabled Necrotic rolls separately for every other friendly rune destroyed, including destruction by its own attribute or an upgrade. It does not roll for itself or for an ally destroyed simultaneously with it. On 3+ it creates a Haunting in its owner's hand, even beyond the deck construction limit."],
    [["spectral", "intangible"], "Spectral uses its action from the frontline to disable an enemy, including one in the backline, until the start of Spectral's owner's next turn. Its effect also ends if Spectral is destroyed, upgraded, or moved to the backline. Intangible cannot be disabled."],
    [["spectral", "necrotic"], "A disabled rune cannot move, swap, upgrade, or act. Its defensive effects still work, including health and attack modifiers while defending, but other passive effects such as Necrotic's are suppressed."],
    [["spectral"], "Multiple Spectrals can disable the same rune; each effect must end for the target to be enabled. A disabled Spectral's effect is suppressed and automatically resumes when it is enabled again, provided the effect has not otherwise ended. If two Spectrals would disable each other, the later effect takes precedence."],
    [["bolt", "intangible", "deflecting", "deflecting-major", "hardened"], "Bolt and Double Bolt work identically: use an action from either row to trade any number of current hit points, including the last, for equal damage distributed among enemy runes, including the backline. Damage assigned to each rune is one hit, so Hardened reduces it once and Deflecting rolls once per targeted rune. Intangible cannot be selected; the hit-point cost is paid even if damage is negated."],
    [["haunting", "spectral"], "Disabled Haunting still curses a surviving rune that destroys it, including through a damage attribute."],
    [["amplifying", "intangible"], "Amplifying uses its action from either row to give another friendly rune +1 attack until the start of its owner's next turn. Bonuses stack, apply when defending, remain through the target's upgrade, and apply even against defending Intangible."],
    [["amplifying", "spectral", "lightning"], "An Amplifying bonus ends if its source is destroyed or upgraded. The bonus is suppressed while the source is disabled, and returns if the source recovers before the bonus expires. Moving the source does not end it."],
    [["soulbind"], "Soulbind uses an action from either row to link to another friendly rune in either row until the start of its owner's next turn. The link follows the target through movement and upgrades. A rune can have only one Soulbind protector; the newest link replaces the old one. Soulbind cannot target another Soulbind. Its link is suppressed while it is disabled or stunned, and ends if Soulbind is destroyed or upgraded."],
    [["soulbind", "hardened", "deflecting", "deflecting-major", "intangible"], "The linked rune's normal damage reductions and Deflecting resolve first. Any HP loss that remains, including HP costs paid by abilities, is redirected to Soulbind and uses its temporary HP before HP. Soulbind's own defenses do not apply again. Damage beyond Soulbind's remaining HP does not spill over; once Soulbind is destroyed, later hits affect the linked rune normally."],
    [["focus", "soulbind"], "Focus can copy Soulbind and use its link normally. The link ends at the start of Focus's next turn even if it chooses Soulbind again."],
    [["splinter", "intangible", "deflecting", "deflecting-major"], "When Splinter deals damage in combat, attacking or defending, it deals 1 extra damage to up to three other enemy runes, including backline runes. It still does so if destroyed in that combat. Intangible is immune to the extra damage, and each Deflecting rune rolls separately."],
    [["masterful", "intangible", "deflecting", "deflecting-major"], "Masterful can use its action in the frontline to trade 1-4 of its current hit points, including its last, for equal damage distributed among enemy runes, including the backline. Intangible cannot be selected. Targets do not retaliate, and it may instead choose a normal attack. Damage resolves before the source is destroyed; Deflecting rolls separately for each point assigned. The cost is paid even if damage is negated."],
    [["masterful", "hardened"], "Masterful resolves each assigned damage point as a separate hit, so Hardened reduces each of those hits by 1."],
    [["focus"], "At the very start of each owner's turn, each enabled, non-stunned Focus chooses another friendly rune's attribute or none without using its action. The source may be in either row, disabled, or stunned, but cannot be another Focus. A newly upgraded Focus waits until its next turn."],
    [["focus"], "The copied attribute lasts until the next choice even if the source moves, upgrades, or is destroyed. Focus keeps its own name, rank, and colours and follows the copied attribute's normal restrictions and costs."],
    [["focus", "spectral", "lightning"], "Focus chooses no attribute automatically if it is disabled at the start of the turn. If changing or losing a copied health bonus reduces it to zero hit points, it is destroyed immediately; rechoosing the same health bonus can preserve it."],
    [["focus", "spectral", "amplifying"], "Copied Spectral and Amplifying effects expire at the start of their owner's next turn even if Focus chooses the same attribute again."],
    [["growth"], "At the beginning of its owner's turn, Growth heals 1 damage if damaged; otherwise it gains 1 temporary hit point. Temporary hit points have no maximum and are lost before normal hit points."],
    [["leech"], "Leech restores 1 damage once per positive combat hit it deals, whether attacking or retaliating, regardless of how many damage points the hit causes. Damage absorbed by temporary HP counts, but a hit reduced to zero does not. Leech must survive the full combat exchange to heal; it cannot regain lost temporary HP. Focus copying Leech follows the same rules."],
    [["martyr"], "Martyr uses its action from either row to destroy itself and refresh the action of another friendly rune that has already used an action this turn. Upgrading counts as using an action, but playing a rune does not. The refreshed action may be an attack, attribute, or upgrade; movement remains separate. Each Martyr can refresh an ally once, and multiple Martyrs may refresh the same ally again after it uses the refreshed action. The ally's normal restrictions still apply, including Frenzy's limit of two attacks per turn. Focus copying Martyr sacrifices Focus itself."],
    [["command"], "Command uses its action from either row to refresh another friendly rune's action after it has already used an action this turn. Upgrading counts as using an action, but playing a rune does not. The target may take one additional attack, attribute, or upgrade; movement remains separate. Command does not sacrifice itself. Each Command can refresh an ally once, and another Command may refresh that ally after it uses the granted action. Command can let Frenzy exceed its usual two-attack limit by one attack for each Command-granted action. Focus copying Command follows the same rules."],
    [["recall"], "Recall uses an action from either row to return another friendly rune from either row to its owner's hand. It returns every card in the rune's upgrade stack; Recall cannot target itself. If a frontline rune is returned, a friendly rune behind it immediately moves forward. Recalling a rune is not destruction, so it does not trigger destruction effects. Focus copying Recall follows the same rules."],
    [["transpose"], "Transpose uses its action from the frontline only. Its controller chooses two eligible opposing runes and swaps their positions. The swap is allowed only if both resulting positions are legal; a backline rune needs its corresponding frontline occupied unless it is Phantom. Intangible and a backline Cloak cannot be selected. Transpose ignores Snare and does not consume either target's normal movement. Focus copying Transpose follows the same rules."],
    [["execution"], "Execution uses its normal attack action, which can only be made from the frontline. If the target's current HP is below its current maximum HP and it is not defending Intangible, destroy it immediately without normal combat damage or retaliation. Losing temporary HP alone does not qualify because it also lowers current maximum HP. Deflecting rolls as usual: a successful roll prevents Execution, while a failed roll leaves the target to be destroyed. Normal destruction effects still resolve. Focus copying Execution follows the same rules."],
    [["infusion", "intangible"], "Infusion uses its action from either row to give another friendly rune +2 attack until the start of its owner's next turn. It costs Infusion 1 HP, temporary HP first; it may spend its last HP and still resolve. Infusion bonuses stack and remain if Infusion leaves play or the target upgrades. The bonus applies while defending and even against defending Intangible. Focus copying Infusion follows the same rules."],
    [["guardian"], "Each enabled Guardian reduces each instance of damage dealt to a friendly backline rune by 1. Guardians stack with each other and Hardened, and reduction cannot lower damage below zero. This applies to combat, attributes, secondary hits, and returned deflection damage, but not HP costs paid by the rune's owner. Piercing and Piercing Major ignore Guardian's damage reduction."],
    [["ambush"], "Ambush adds 1 to its attack damage against a rune marked as not acted. A rune that acted during its owner's turn remains marked as acted during the opponent's following turn; the state resets when its owner starts their next turn. Moving alone does not count as acting. This bonus is only for the attacker's damage, and defending Intangible ignores it."],
    [["berserk"], "Berserk has +1 maximum HP and gains +1 attack for each damage marker currently on it. Healing removes a damage marker and its attack bonus; damage absorbed by temporary HP does not count. Focus copying Berserk gets the same HP and attack bonuses."],
    [["frenzy"], "Frenzy can attack twice per turn by default. Its first attack uses its action, then one second attack is allowed without granting another upgrade or attribute action. Command can grant further attacks beyond this limit, one per Command-granted action. Upgrading or using an action instead of attacking prevents its attacks that turn; movement remains separate. The attack count resets at the start of its owner's turn."],
    [["snare"], "Snare uses an action from either row to target an eligible enemy rune in either row. The target cannot move or swap during its next turn, but may still attack, upgrade, and use attributes. The restriction ends when that turn ends; Intangible and a backline Cloak cannot be targeted."],
    [["phoenix"], "When Phoenix is destroyed, roll a six-sided die. On 4+, return its top card to its owner's hand instead of the destroyed pile. It can return from any kind of destruction."],
    [["phantom"], "Phantom may be played or moved into a backline slot even when the frontline slot in that column is empty. Other runes still require a frontline rune to remain in front of them."],
    [["cloak"], "While Cloak is in the backline, enemy attributes cannot target it. This also prevents attribute damage that would otherwise reach it as a secondary target; attacks are unaffected."]
  ];
  var generalRuneRules = [
    "Each player can have up to the selected game-format limit in play, with a maximum of four in the frontline. Each backline rune needs a frontline rune directly in front of it.",
    `Rank 1 runes may be played at any time during a turn, up to the battlefield limit. A player must have at least one rune in play on their first turn. On the opening turn, the first player may play up to the selected game-format limit in rank 1 runes. Newly played runes cannot act${ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE ? ", except that the player going second may upgrade them on their first turn" : ""}.`,
    "A player loses when they have no runes on the battlefield, even if they have cards in hand. If both players' last runes are destroyed together, the round is a draw and another round is played with the same decks; the other player goes first.",
    "A Spectral stalemate draws the round when it disables the opponent's only rune, each player has only one rune and no rank 1 cards in hand, Spectral cannot upgrade, and attacking would destroy Spectral without destroying its target.",
    "Damage remains when a rune upgrades. A multicolour rune matches any of its visible colours when upgrading.",
    "A deck may contain multiple copies of a card design, subject to the 24-rank deck limit.",
    "Players can end their turn early. A frontline rune may move away from its protected rune, which then moves forward. Friendly runes can swap positions; only the rune initiating the swap uses its movement.",
    "A disabled rune cannot move, swap, upgrade, or act, but keeps its defensive effects. Lightning disables through the end of the target's next full turn; Spectral's disable depends on its source."
  ];
  function rulesFor(attribute) {
    const rules = rulings.filter(([attributes]) => attributes.includes(attribute)).map(([, text]) => text);
    if (!rules.length) throw new Error(`No rulings for attribute: ${attribute}`);
    return rules;
  }
  function getRuneRuleSections(card, focusCopy = null) {
    const sections = [{ title: `${card.name} rulings`, rules: rulesFor(card.attribute) }];
    if (card.name === "Transmute") {
      sections[0].rules.push("Transmute can upgrade any rank 1 rune, regardless of colour.");
    }
    if (card.attribute === "focus" && focusCopy) {
      sections.push({
        title: `Copied from ${focusCopy.name}`,
        description: focusCopy.attributeText,
        rules: rulesFor(focusCopy.attribute)
      });
    }
    return sections;
  }

  // src/ai.js
  function boardValue(game2, playerIndex) {
    const player = game2.players[playerIndex];
    return player.slots.reduce((total, rune, slot) => {
      if (!rune) return total;
      const card = rune.stack.at(-1);
      const stats = getRuneStats(rune, player);
      const disabled = rune.stunned || isRuneDisabled(game2, playerIndex, slot);
      const attribute = getRuneAttribute(rune);
      const ability = attribute === "intangible" || attribute === "deflecting-major" ? 1.5 : attribute === "magma" || attribute === "soul" || attribute === "necrotic" ? 1 : 0;
      const soulbindProtection = player.slots.some((source, sourceSlot) => source && getRuneAttribute(source) === "soulbind" && source.soulbinds === rune.stack[0].id && !source.stunned && !isRuneDisabled(game2, playerIndex, sourceSlot));
      const commandedAction = rune.commandedActionAvailable ? 1.5 : 0;
      return total + 5 + card.rank * 2 + stats.health * 1.5 + stats.attack * (disabled ? 0.2 : 0.6) + (disabled ? -1.5 : ability) + (soulbindProtection ? 1.5 : 0) + commandedAction + (slot < 4 ? 0.2 : 0);
    }, 0);
  }
  function frontlineAttackValue(game2, playerIndex) {
    const player = game2.players[playerIndex];
    return player.slots.slice(0, 4).reduce((total, rune) => total + (rune ? getRuneStats(rune, player).attack : 0), 0);
  }
  function value(game2, playerIndex) {
    if (game2.winner === "draw") return 0;
    if (game2.winner !== null) return game2.winner === playerIndex ? 1e4 : -1e4;
    return boardValue(game2, playerIndex) - boardValue(game2, 1 - playerIndex);
  }
  function acceptsDrawOffer(game2, playerIndex) {
    return game2.players.every((player) => player.turnsStarted > 0) && value(game2, playerIndex) <= 0;
  }
  function movementPositionKey(game2, playerIndex, movedId, ignoreCardIds, ignoreMovement = false) {
    const players = game2.players.map((player, index) => {
      if (index !== playerIndex) return player;
      const normalize = (rune) => {
        if (!rune) return null;
        const stack = ignoreCardIds ? rune.stack.map(({ id, ...card }) => card) : rune.stack;
        return { ...rune, stack, moved: ignoreMovement || rune.stack[0].id === movedId ? false : rune.moved };
      };
      const columns = Array.from({ length: 4 }, (_, column) => JSON.stringify([normalize(player.slots[column]), normalize(player.slots[column + 4])])).sort();
      return { ...player, slots: columns };
    });
    return JSON.stringify({
      ...game2,
      players,
      lastRoll: null,
      lastDeflections: [],
      lastNecroticRolls: [],
      lastPhoenixRolls: [],
      lastSplinterTriggers: [],
      lastSoulbindRedirects: []
    });
  }
  function isEquivalentMove(before, after, action) {
    const player = before.currentPlayer;
    const movedId = before.players[player].slots[action.from].stack[0].id;
    const hasIdentityLinks = (game2) => game2.players.some((owner) => owner.slots.some((rune) => rune && (rune.spectralEffect || rune.amplifies || rune.soulbinds)));
    const ignoreCardIds = !hasIdentityLinks(before) && !hasIdentityLinks(after);
    if (movementPositionKey(before, player, movedId, ignoreCardIds) === movementPositionKey(after, player, movedId, ignoreCardIds)) return true;
    const [source, target] = [action.from, action.to].map((slot) => before.players[player].slots[slot]);
    if (!ignoreCardIds || !target) return false;
    const identity = (rune) => JSON.stringify({
      ...rune,
      stack: rune.stack.map(({ id, ...card }) => card),
      moved: false
    });
    return identity(source) === identity(target) && movementPositionKey(before, player, movedId, true, true) === movementPositionKey(after, player, movedId, true, true);
  }
  function analyzeAiDecision(game2, difficulty = "basic", inspectSample = null) {
    if (difficulty !== "basic") throw new Error(`Unsupported AI difficulty: ${difficulty}`);
    const actions = getLegalActions(game2);
    if (!actions.length) {
      if (game2.winner !== null) return null;
      throw new Error("The AI has no legal actions.");
    }
    const playerIndex = game2.currentPlayer;
    const enemyValue = boardValue(game2, 1 - playerIndex);
    const focusRequired = actions[0].type === "chooseFocus";
    let bestAction = actions.find((action) => action.type === "endTurn") ?? null;
    let bestScore = focusRequired || !bestAction ? -Infinity : value(game2, playerIndex) + 0.05;
    const endTurnScore = Number.isFinite(bestScore) ? bestScore : null;
    const candidates = [];
    for (const action of actions) {
      if (action.type === "endTurn") {
        const samples2 = inspectSample ? [2, 5].map((roll) => {
          let rollCount = 0;
          const next = applyAction(game2, action, () => {
            rollCount++;
            return roll;
          });
          return { roll, rollCount, winner: next.winner, features: inspectSample(game2, action, next) };
        }) : [];
        candidates.push({ action, score: endTurnScore, samples: samples2 });
        continue;
      }
      const samples = [];
      let equivalentMove = action.type === "move";
      const score = [2, 5].reduce((sum, roll) => {
        let rollCount = 0;
        const next = applyAction(game2, action, () => {
          rollCount++;
          return roll;
        });
        if (equivalentMove && !isEquivalentMove(game2, next, action)) equivalentMove = false;
        const enemyAfter = action.type === "attack" || action.type === "attribute" ? boardValue(next, 1 - playerIndex) : null;
        const aggression = enemyAfter !== null && enemyAfter < enemyValue ? 0.3 : 0;
        const transposePositionGain = action.type === "attribute" && getRuneAttribute(game2.players[playerIndex].slots[action.slot]) === "transpose" ? (frontlineAttackValue(game2, action.targetPlayer) - frontlineAttackValue(next, action.targetPlayer)) * 0.2 : 0;
        const stateValue = value(next, playerIndex);
        samples.push({
          roll,
          stateValue,
          enemyBoardValue: enemyAfter,
          aggression,
          transposePositionGain,
          winner: next.winner,
          ...inspectSample ? { rollCount, features: inspectSample(game2, action, next) } : {},
          outcomes: {
            lastRoll: next.lastRoll,
            deflections: next.lastDeflections,
            necroticRolls: next.lastNecroticRolls,
            phoenixRolls: next.lastPhoenixRolls,
            splinterTriggers: next.lastSplinterTriggers
          }
        });
        return sum + stateValue + aggression + transposePositionGain;
      }, 0) / 2;
      const exclusionReason = equivalentMove ? "Equivalent to staying put." : null;
      candidates.push({ action, score, samples, exclusionReason });
      if (!exclusionReason && score > bestScore) {
        bestScore = score;
        bestAction = action;
      }
    }
    return {
      action: bestAction,
      candidates,
      enemyBoardValue: enemyValue,
      endTurnScore,
      tieBreak: "Equivalent moves are excluded; end turn is the initial preference when legal, otherwise the first highest-scoring action wins."
    };
  }

  // src/ai-diagnostics.js
  function createAiLog(game2, difficulty, decks) {
    return {
      schemaVersion: 1,
      startedAt: (/* @__PURE__ */ new Date()).toISOString(),
      mode: "ai",
      difficulty,
      decks: structuredClone(decks),
      initialState: structuredClone(game2),
      events: []
    };
  }
  function recordAiLogAction(log, before, action, after, actualRolls, history, decision = null) {
    log.events.push(structuredClone({
      type: "action",
      before,
      action,
      after,
      actualRolls,
      history,
      decision
    }));
  }
  function recordAiLogRound(log, round, game2) {
    log.events.push({ type: "round-start", round, initialState: structuredClone(game2) });
  }
  function recordAiLogFailure(log, attempt, after, error) {
    log.events.push(structuredClone({
      type: "ai-error",
      before: attempt.before,
      after,
      decision: attempt.decision,
      actualRolls: attempt.actualRolls,
      actionApplied: attempt.actionApplied,
      actionRecorded: attempt.actionRecorded,
      error: error instanceof Error ? error.message : String(error)
    }));
  }
  function serializeAiLog(log) {
    return JSON.stringify(log, null, 2);
  }
  function applyLoggedAction(game2, action, actualRolls, rollDie = () => Math.floor(Math.random() * 6) + 1) {
    return applyAction(game2, action, () => {
      const roll = rollDie();
      actualRolls.push(roll);
      return roll;
    });
  }

  // src/learning-ai.js
  var FEATURE_NAMES = [
    "runes",
    "rank",
    "health",
    "attack",
    "protected",
    "protectedSupport",
    "play",
    "upgrade",
    "move",
    "attackAction",
    "attribute",
    "endTurn"
  ];
  var SUPPORT = /* @__PURE__ */ new Set(["mending", "amplifying", "soulbind", "necrotic", "bolt", "soul", "magma"]);
  var WEIGHT_LIMIT = 4;
  var LEARNING_RATE = 0.25;
  var clamp = (value2, limit = 1) => Math.max(-limit, Math.min(limit, value2));
  function createLearningModel() {
    return {
      schemaVersion: 1,
      revision: 0,
      games: 0,
      wins: 0,
      baseline: 0,
      weights: FEATURE_NAMES.map(() => 0),
      lastGameId: null
    };
  }
  function playerFeatures(game2, playerIndex) {
    const player = game2.players[playerIndex];
    const result = Array(6).fill(0);
    for (let slot = 0; slot < player.slots.length; slot++) {
      const rune = player.slots[slot];
      if (!rune) continue;
      const stats = getRuneStats(rune, player);
      result[0]++;
      result[1] += rune.stack.at(-1).rank;
      result[2] += stats.health;
      result[3] += stats.attack;
      if (slot >= 4) {
        result[4]++;
        if (!rune.stunned && !isRuneDisabled(game2, playerIndex, slot) && SUPPORT.has(getRuneAttribute(rune))) result[5]++;
      }
    }
    return result;
  }
  function learningFeatures(before, action, after) {
    const player = before.currentPlayer;
    const own = playerFeatures(after, player);
    const opponent = playerFeatures(after, 1 - player);
    const scales = [4, 16, 32, 24, 4, 4];
    return [
      ...own.map((value2, index) => clamp((value2 - opponent[index]) / scales[index])),
      ...["play", "upgrade", "move", "attack", "attribute", "endTurn"].map((type) => Number(action.type === type) * (type === "move" ? 0.25 : 1))
    ];
  }
  function analyzeLearningDecision(game2, model, random = Math.random) {
    const evaluation = analyzeAiDecision(game2, "basic", learningFeatures);
    if (!evaluation) return null;
    const player = game2.currentPlayer;
    const candidates = evaluation.candidates.map((candidate) => {
      const features = FEATURE_NAMES.map((_, index) => candidate.samples.reduce((sum, sample) => sum + sample.features[index], 0) / candidate.samples.length);
      const adjustment = features.reduce((sum, feature, index) => sum + feature * model.weights[index], 0);
      return { ...candidate, features, adjustment, probability: 0 };
    });
    const certainWin = (candidate) => candidate.samples.every((sample) => sample.rollCount === 0 && sample.winner === player);
    const certainLoss = (candidate) => candidate.samples.every((sample) => sample.rollCount === 0 && sample.winner === 1 - player);
    const available = candidates.filter((candidate) => !candidate.exclusionReason);
    let eligible = available.filter(certainWin);
    if (!eligible.length) {
      eligible = available.filter((candidate) => !certainLoss(candidate));
      if (!eligible.length) eligible = available;
    }
    const moveCount = eligible.filter((candidate) => candidate.action.type === "move").length;
    for (const candidate of candidates) {
      candidate.movementAdjustment = candidate.action.type === "move" && !candidate.exclusionReason ? -3 - Math.log(moveCount || 1) : 0;
    }
    const logits = eligible.map((candidate) => clamp(candidate.score / 3, 40) + candidate.adjustment + candidate.movementAdjustment);
    const maximum = Math.max(...logits);
    const masses = logits.map((value2) => Math.exp(value2 - maximum));
    const total = masses.reduce((sum, mass) => sum + mass, 0);
    eligible.forEach((candidate, index) => {
      candidate.probability = masses[index] / total;
    });
    const roll = random();
    if (!Number.isFinite(roll) || roll < 0 || roll >= 1) throw new Error("Learning AI randomness must be between 0 and 1.");
    let cumulative = 0;
    let selected = eligible[eligible.length - 1];
    for (const candidate of eligible) {
      cumulative += candidate.probability;
      if (roll < cumulative) {
        selected = candidate;
        break;
      }
    }
    return {
      ...evaluation,
      action: selected.action,
      candidates,
      selectedIndex: candidates.indexOf(selected),
      modelRevision: model.revision,
      featureNames: FEATURE_NAMES,
      policy: "Softmax over heuristic scores and learned features; equivalent moves are excluded, movement alternatives share a prior, and certain deterministic wins take priority."
    };
  }
  function createLearningEpisode() {
    return { gradient: FEATURE_NAMES.map(() => 0), decisions: 0 };
  }
  function createLearningRandom(seed) {
    let state = seed >>> 0;
    return () => {
      state = state + 1831565813 >>> 0;
      let value2 = state;
      value2 = Math.imul(value2 ^ value2 >>> 15, value2 | 1);
      value2 ^= value2 + Math.imul(value2 ^ value2 >>> 7, value2 | 61);
      return ((value2 ^ value2 >>> 14) >>> 0) / 4294967296;
    };
  }
  function recordLearningDecision(episode, decision) {
    const chosen = decision.candidates[decision.selectedIndex];
    for (let index = 0; index < FEATURE_NAMES.length; index++) {
      const expected = decision.candidates.reduce((sum, candidate) => sum + candidate.probability * candidate.features[index], 0);
      episode.gradient[index] += chosen.features[index] - expected;
    }
    episode.decisions++;
  }
  function updateLearningModel(model, episode, winner, playerIndex, matchId) {
    if (winner !== 0 && winner !== 1) throw new Error("Learning requires a completed match.");
    if (!Number.isSafeInteger(model.revision + 1) || !Number.isSafeInteger(model.games + 1)) {
      throw new Error("The learning model has reached its statistics limit. Export and reset it before continuing.");
    }
    const reward = winner === playerIndex ? 1 : -1;
    const advantage = reward - model.baseline;
    const divisor = Math.max(1, episode.decisions);
    return {
      ...model,
      revision: model.revision + 1,
      games: model.games + 1,
      wins: model.wins + (reward === 1 ? 1 : 0),
      baseline: clamp(model.baseline * 0.9 + reward * 0.1),
      weights: model.weights.map((weight, index) => clamp(weight + LEARNING_RATE * advantage * episode.gradient[index] / divisor, WEIGHT_LIMIT)),
      lastGameId: matchId
    };
  }

  // src/learning-storage.js
  var LEARNING_STORAGE_KEY = "rune-manic.learning-ai.v1";
  var SNAPSHOT_STORAGE_KEY = "rune-manic.learning-opponents.v1";
  var LOCK_NAME = "rune-manic.learning-ai.v1";
  var prebuiltLearningOpponents = [{
    name: "Level 30",
    model: {
      schemaVersion: 1,
      revision: 30,
      games: 30,
      wins: 12,
      baseline: -0.17013144024677865,
      weights: [
        -0.017013675817990858,
        -866666595238498e-18,
        0.0035285453444518075,
        -0.0035371225200315735,
        -0.03207147016694084,
        0.002977495320533434,
        -0.005240441619297443,
        0.039711332382893774,
        -0.07127908134743721,
        0.07949025306913012,
        0.008859537292692819,
        -0.05154159977798209
      ],
      lastGameId: "74840ee04fb8ab94a88354aedceca7ba"
    }
  }, {
    name: "Level 40",
    model: {
      schemaVersion: 1,
      revision: 40,
      games: 40,
      wins: 16,
      baseline: -0.15503652509721325,
      weights: [
        -0.027410377840997254,
        -0.0017476257931299316,
        0.005219034189237852,
        -0.0035160305535447698,
        -0.0378231801670487,
        -0.0118433449634709,
        -0.019652660895249953,
        0.09770923766798338,
        -0.027095541750801286,
        0.013160904687467834,
        0.036867679633683884,
        -0.10098961934308395
      ],
      lastGameId: "f904a6a2c4158e2e82d05053b4eccd98"
    }
  }, {
    name: "Level 80",
    model: {
      schemaVersion: 1,
      revision: 80,
      games: 80,
      wins: 26,
      baseline: -0.4184577501910317,
      weights: [
        -0.05194611241413603,
        -0.0071024978965485526,
        0.005029492206073472,
        -0.00612294033109093,
        -0.06500421305493279,
        -0.030215883469189284,
        -0.048108752213694775,
        0.17922944783019995,
        -0.031305951495531045,
        0.0031486314030989802,
        0.042905799337361834,
        -0.1332379456272458
      ],
      lastGameId: "447e876fbf865f8ec3a82ead4f4418ff"
    }
  }, {
    name: "Level 100",
    model: {
      schemaVersion: 1,
      revision: 100,
      games: 100,
      wins: 30,
      baseline: -0.38634235074515255,
      weights: [
        -0.05745560497455945,
        -0.0066781212773809025,
        0.008228115279165614,
        -0.009225371314649265,
        -0.0743514242835329,
        -0.04196933897611285,
        -0.0450443508328316,
        0.19604048319861184,
        -0.03315861880107152,
        -0.014522917363680748,
        0.029477084141272317,
        -0.11460244919148962
      ],
      lastGameId: "47b53bed1deeec0572073dbd9b69acd1"
    }
  }];
  function availableLearningOpponents(saved) {
    const options = prebuiltLearningOpponents.map((opponent) => ({
      ...opponent,
      label: opponent.name,
      value: `builtin:${opponent.name}`
    }));
    for (const opponent of saved) {
      const index = options.findIndex((option2) => option2.name === opponent.name);
      const builtin = index === -1 ? null : options[index];
      const sameModel = builtin && Object.keys(builtin.model).every((key) => key === "weights" ? builtin.model.weights.every((weight, i) => weight === opponent.model.weights[i]) : builtin.model[key] === opponent.model[key]);
      const option = {
        ...opponent,
        label: builtin && !sameModel ? `${opponent.name} (saved)` : opponent.name,
        value: `snapshot:${opponent.name}`
      };
      if (sameModel) options[index] = option;
      else options.push(option);
    }
    return options;
  }
  function validateLearningModel(model) {
    const keys = ["schemaVersion", "revision", "games", "wins", "baseline", "weights", "lastGameId"];
    if (!model || typeof model !== "object" || Array.isArray(model) || Object.keys(model).length !== keys.length || keys.some((key) => !Object.hasOwn(model, key)) || model.schemaVersion !== 1 || !Number.isSafeInteger(model.revision) || model.revision < 0 || !Number.isSafeInteger(model.games) || model.games < 0 || !Number.isSafeInteger(model.wins) || model.wins < 0 || model.wins > model.games || !Number.isFinite(model.baseline) || Math.abs(model.baseline) > 1 || !Array.isArray(model.weights) || model.weights.length !== FEATURE_NAMES.length || model.weights.some((weight) => !Number.isFinite(weight) || Math.abs(weight) > 4) || !(model.lastGameId === null || typeof model.lastGameId === "string" && model.lastGameId.length > 0 && model.lastGameId.length <= 100)) {
      throw new Error("The learning model is invalid or uses an unsupported version.");
    }
    return model;
  }
  function parseLearningModel(raw) {
    let model;
    try {
      model = JSON.parse(raw);
    } catch (error) {
      throw new Error("The learning model is not valid JSON.", { cause: error });
    }
    return validateLearningModel(model);
  }
  function loadLearningCheckpoint(storage) {
    const raw = storage.getItem(LEARNING_STORAGE_KEY);
    return { raw, model: raw === null ? createLearningModel() : parseLearningModel(raw) };
  }
  function loadLearningSnapshots(storage) {
    const raw = storage.getItem(SNAPSHOT_STORAGE_KEY);
    if (raw === null) return [];
    let snapshots;
    try {
      snapshots = JSON.parse(raw);
    } catch (error) {
      throw new Error("Saved AI opponents are not valid JSON.", { cause: error });
    }
    if (!Array.isArray(snapshots)) throw new Error("Saved AI opponents are invalid.");
    const names = /* @__PURE__ */ new Set();
    for (const snapshot of snapshots) {
      if (!snapshot || typeof snapshot !== "object" || Array.isArray(snapshot) || Object.keys(snapshot).length !== 2 || typeof snapshot.name !== "string" || !snapshot.name.trim() || snapshot.name !== snapshot.name.trim() || snapshot.name.length > 80 || names.has(snapshot.name)) throw new Error("Saved AI opponents are invalid.");
      validateLearningModel(snapshot.model);
      names.add(snapshot.name);
    }
    return snapshots;
  }
  function withLock(locks, callback) {
    if (!locks || typeof locks.request !== "function") {
      throw new Error("This browser cannot safely coordinate learning data between tabs.");
    }
    return locks.request(LOCK_NAME, { mode: "exclusive" }, callback);
  }
  function saveLearningSnapshot(storage, locks, name) {
    if (typeof name !== "string" || !name.trim() || name.trim().length > 80) {
      throw new Error("Enter an opponent name of 1 to 80 characters.");
    }
    const trimmed = name.trim();
    return withLock(locks, () => {
      const snapshots = loadLearningSnapshots(storage);
      if (snapshots.some((snapshot2) => snapshot2.name === trimmed)) {
        throw new Error("An opponent with that name already exists.");
      }
      const checkpoint = loadLearningCheckpoint(storage);
      if (checkpoint.raw === null) throw new Error("There is no saved Learning AI model to snapshot.");
      const snapshot = { name: trimmed, model: checkpoint.model };
      storage.setItem(SNAPSHOT_STORAGE_KEY, JSON.stringify([...snapshots, snapshot]));
      return snapshot;
    });
  }
  function commitLearningModel(storage, locks, expectedRaw, model) {
    validateLearningModel(model);
    return withLock(locks, () => {
      const current = loadLearningCheckpoint(storage);
      if (model.lastGameId && current.model.lastGameId === model.lastGameId) return current.model;
      if (current.raw !== expectedRaw) {
        throw new Error("Learning data changed in another tab. The pending update was not saved.");
      }
      storage.setItem(LEARNING_STORAGE_KEY, JSON.stringify(model));
      return model;
    });
  }
  function replaceLearningModel(storage, locks, expectedRaw, model) {
    validateLearningModel(model);
    return withLock(locks, () => {
      if (storage.getItem(LEARNING_STORAGE_KEY) !== expectedRaw) {
        throw new Error("Learning data changed in another tab. Nothing was replaced.");
      }
      storage.setItem(LEARNING_STORAGE_KEY, JSON.stringify(model));
      return model;
    });
  }

  // src/action-history.js
  function drawDescription(reason) {
    if (reason === "spectral-stalemate") return "Spectral has locked the last opposing rune in a stalemate.";
    if (reason === "no-progress") return "Four consecutive turns passed without meaningful progress.";
    if (reason === "agreement") return "Both players agreed to a draw.";
    return "Both players lost their last runes.";
  }
  function slotName(slot) {
    return `${slot < 4 ? "frontline" : "backline"} ${slot % 4 + 1}`;
  }
  function playerName(player, aiOpponent) {
    return aiOpponent && player === 1 ? "AI" : `Player ${player + 1}`;
  }
  function runeName(rune) {
    return rune.stack.at(-1).name;
  }
  function describeRune(game2, player, slot, aiOpponent) {
    return `${playerName(player, aiOpponent)}'s ${runeName(game2.players[player].slots[slot])} (${slotName(slot)})`;
  }
  function isExecutionAttack(source, target) {
    return getRuneAttribute(source) === "execution" && target.damage > 0 && getRuneAttribute(target) !== "intangible";
  }
  function actionSummary(game2, action, aiOpponent) {
    const player = game2.currentPlayer;
    const owner = playerName(player, aiOpponent);
    const slots = game2.players[player].slots;
    if (action.type === "concede") return `${playerName(action.player, aiOpponent)} conceded.`;
    if (action.type === "offerDraw") return `${playerName(action.player, aiOpponent)} offered a draw.`;
    if (action.type === "acceptDraw") return `${playerName(action.player, aiOpponent)} accepted the draw.`;
    if (action.type === "declineDraw") return `${playerName(action.player, aiOpponent)} declined the draw.`;
    if (action.type === "endTurn") return `${owner} ended their turn.`;
    if (action.type === "play") {
      const card = game2.players[player].hand.find((item) => item.id === action.cardId);
      return `${owner} played ${card.name} at ${slotName(action.slot)}.`;
    }
    if (action.type === "move") {
      const source2 = describeRune(game2, player, action.from, aiOpponent);
      return slots[action.to] ? `${source2} swapped places with ${describeRune(game2, player, action.to, aiOpponent)}.` : `${source2} moved to ${slotName(action.to)}.`;
    }
    if (action.type === "acceptAttack" || action.type === "deflectAttack") {
      const pending = game2.pendingDeflection;
      const target = describeRune(game2, pending.player, pending.target, aiOpponent);
      return `${playerName(pending.player, aiOpponent)} chose to ${action.type === "deflectAttack" ? "deflect" : "take the normal attack"} for ${target}.`;
    }
    const source = describeRune(game2, player, action.slot, aiOpponent);
    if (action.type === "upgrade") {
      const card = game2.players[player].hand.find((item) => item.id === action.cardId);
      return `${source} upgraded to ${card.name}.`;
    }
    if (action.type === "attack") {
      return `${source} attacked ${describeRune(game2, 1 - player, action.target, aiOpponent)}.`;
    }
    if (action.type === "chooseFocus") {
      const choice = action.sourceSlot === null ? "no attribute" : `${runeName(slots[action.sourceSlot])}'s attribute`;
      return `${source} chose ${choice}.`;
    }
    if (action.type === "attribute") {
      const attribute = getRuneAttribute(slots[action.slot]);
      const ability = slots[action.slot].focusCopy ? ` (copied from ${slots[action.slot].focusCopy.name})` : "";
      const targets = [
        ...action.targetSlot === void 0 ? [] : [action.targetSlot],
        ...action.targetSlots ?? []
      ];
      const counts = /* @__PURE__ */ new Map();
      for (const slot of targets) counts.set(slot, (counts.get(slot) ?? 0) + 1);
      const targetText = [...counts].map(([slot, count]) => `${describeRune(game2, action.targetPlayer, slot, aiOpponent)}${count > 1 ? ` \xD7${count}` : ""}`).join(", ");
      const trade = attribute === "bolt" || attribute === "masterful" ? `, trading ${action.targetSlots.length} HP` : "";
      if (attribute === "martyr") {
        return `${source} used its attribute${ability} and sacrificed itself to refresh ${targetText}'s action.`;
      }
      if (attribute === "recall") {
        return `${source} used its attribute${ability} to return ${targetText} and any attached runes to ${playerName(action.targetPlayer, aiOpponent)}'s hand.`;
      }
      if (attribute === "soulbind") {
        return `${source} used its attribute${ability} to link to ${targetText}; it takes HP loss for that rune until its next turn.`;
      }
      if (attribute === "infusion") {
        return `${source} used its attribute${ability} to give ${targetText} +2 attack until the start of ${owner}'s next turn, paying 1 HP.`;
      }
      if (attribute === "command") {
        return `${source} used its attribute${ability} to give ${targetText} an additional action.`;
      }
      if (attribute === "transpose") {
        return `${source} used Transpose${ability} to swap the positions of ${targetText}.`;
      }
      return `${source} used its attribute${ability}${targetText ? ` on ${targetText}` : ""}${trade}.`;
    }
    throw new Error(`Unsupported action in history: ${action.type}`);
  }
  function describeAction(before, after, action, aiOpponent = false) {
    const details = [];
    if (after.lastRoll) {
      const roll = after.lastRoll;
      details.push(`${playerName(before.currentPlayer, aiOpponent)}'s ${roll.card} rolled ${roll.value}: ${roll.success ? "success" : "failure"}.`);
    }
    for (const roll of after.lastDeflections) {
      const pending2 = before.pendingDeflection;
      const execution = pending2 && isExecutionAttack(
        before.players[pending2.attackerPlayer].slots[pending2.slot],
        before.players[pending2.player].slots[pending2.target]
      );
      const outcome = execution ? roll.success ? `Execution prevented, ${roll.returned} returned` : "Execution not prevented" : roll.success ? `damage negated, ${roll.returned} returned` : "damage not negated";
      details.push(`${playerName(roll.targetPlayer, aiOpponent)}'s ${roll.card} (${slotName(roll.targetSlot)}) rolled ${roll.value}: ${outcome}.`);
    }
    for (const player of after.lastSplinterTriggers) {
      details.push(`${playerName(player, aiOpponent)}'s Splinter triggered.`);
    }
    for (const heal of after.lastLeechHeals ?? []) {
      details.push(`${playerName(heal.player, aiOpponent)}'s ${heal.card} (${slotName(heal.slot)}) restored 1 HP with Leech.`);
    }
    for (const redirect of after.lastSoulbindRedirects ?? []) {
      details.push(`${describeRune(before, redirect.sourcePlayer, redirect.sourceSlot, aiOpponent)} redirected ${redirect.damage} HP loss from ${describeRune(before, redirect.targetPlayer, redirect.targetSlot, aiOpponent)} to itself.`);
    }
    if (action.type === "attribute" && (!after.lastRoll || after.lastRoll.success)) {
      const source = before.players[before.currentPlayer].slots[action.slot];
      const attribute = getRuneAttribute(source);
      if (attribute !== "mending" && attribute !== "amplifying" && attribute !== "soulbind" && attribute !== "martyr" && attribute !== "recall" && attribute !== "infusion" && attribute !== "command") {
        const targets = /* @__PURE__ */ new Set([
          ...action.targetSlot === void 0 ? [] : [action.targetSlot],
          ...action.targetSlots ?? []
        ]);
        for (const slot of targets) {
          if (getRuneAttribute(before.players[action.targetPlayer].slots[slot]) === "intangible") {
            details.push(`${describeRune(before, action.targetPlayer, slot, aiOpponent)} is immune to ${attribute === "spectral" ? "Spectral" : "the damage"}.`);
          }
        }
      }
    }
    let healthChanged = false;
    const pending = before.pendingDeflection;
    const executionResponse = pending && isExecutionAttack(
      before.players[pending.attackerPlayer].slots[pending.slot],
      before.players[pending.player].slots[pending.target]
    );
    const executionAttack = action.type === "attack" && !after.pendingDeflection && isExecutionAttack(
      before.players[before.currentPlayer].slots[action.slot],
      before.players[1 - before.currentPlayer].slots[action.target]
    );
    const failedExecutionDeflection = action.type === "deflectAttack" && executionResponse && !after.lastDeflections.at(-1)?.success;
    if (executionAttack || action.type === "acceptAttack" && executionResponse || failedExecutionDeflection) {
      details.push("Execution destroyed the wounded target without retaliation.");
    }
    for (let player = 0; player < before.players.length; player++) {
      const oldOwner = before.players[player];
      const newOwner = after.players[player];
      for (let slot = 0; slot < oldOwner.slots.length; slot++) {
        const oldRune = oldOwner.slots[slot];
        if (!oldRune) continue;
        const newSlot = newOwner.slots.findIndex((rune) => rune?.stack[0].id === oldRune.stack[0].id);
        const oldLabel = describeRune(before, player, slot, aiOpponent);
        if (newSlot < 0) {
          const recalled = action.type === "attribute" && player === action.targetPlayer && slot === action.targetSlot && getRuneAttribute(before.players[before.currentPlayer].slots[action.slot]) === "recall";
          if (recalled) {
            const attachedCount = oldRune.stack.length - 1;
            details.push(attachedCount ? `${oldLabel} and its ${attachedCount} attached rune${attachedCount === 1 ? "" : "s"} were returned to ${playerName(player, aiOpponent)}'s hand.` : `${oldLabel} was returned to ${playerName(player, aiOpponent)}'s hand.`);
            healthChanged = true;
            continue;
          }
          const upgraded = action.type === "upgrade" && player === before.currentPlayer && action.slot === slot ? oldOwner.hand.find((card) => card.id === action.cardId) : null;
          const label2 = upgraded ? `${playerName(player, aiOpponent)}'s ${upgraded.name} (${slotName(slot)})` : oldLabel;
          details.push(`${label2} was destroyed.`);
          healthChanged = true;
          continue;
        }
        const newRune = newOwner.slots[newSlot];
        const oldStats = getRuneStats(oldRune, oldOwner);
        const newStats = getRuneStats(newRune, newOwner);
        const label = describeRune(after, player, newSlot, aiOpponent);
        if (oldStats.health !== newStats.health || oldStats.maxHealth !== newStats.maxHealth) {
          details.push(`${label}: HP ${oldStats.health}/${oldStats.maxHealth} \u2192 ${newStats.health}/${newStats.maxHealth}.`);
          healthChanged = true;
        }
        const swapped = action.type === "move" && player === before.currentPlayer && action.to === slot && action.from === newSlot;
        if (slot >= 4 && newSlot === slot - 4 && !swapped && !(action.type === "move" && player === before.currentPlayer && action.from === slot)) {
          details.push(`${oldLabel} moved forward to ${slotName(newSlot)}.`);
        }
        if (!oldRune.stunned && newRune.stunned) details.push(`${label} will skip its next turn.`);
        if (!oldRune.snared && newRune.snared) details.push(`${label} cannot move or swap during its next turn.`);
        if (oldRune.snared && !newRune.snared) details.push(`${label} is no longer snared.`);
        if (!oldRune.haunted && newRune.haunted) details.push(`${label} is haunted.`);
        if (!isRuneDisabled(before, player, slot) && isRuneDisabled(after, player, newSlot)) {
          details.push(`${label} is disabled.`);
        }
        if ((oldRune.amplification ?? 0) !== (newRune.amplification ?? 0)) {
          details.push(`${label}: Amplifying bonus is now +${newRune.amplification ?? 0} attack.`);
        }
        if ((oldRune.infusionAttackBonus ?? 0) !== (newRune.infusionAttackBonus ?? 0)) {
          const infusionBonus = newRune.infusionAttackBonus ?? 0;
          details.push(infusionBonus ? `${label}: Infusion bonus is now +${infusionBonus} attack.` : `${label}: Infusion bonus expired.`);
        }
        if (!oldRune.commandedActionAvailable && newRune.commandedActionAvailable) {
          details.push(`${label} can now perform an additional action this turn.`);
        }
      }
    }
    for (const roll of after.lastNecroticRolls) {
      details.push(`${playerName(roll.player, aiOpponent)}'s Necrotic (${slotName(roll.slot)}) rolled ${roll.value} for ${roll.destroyed}: ${roll.success ? "Haunting added to hand" : "no Haunting added"}.`);
    }
    for (const roll of after.lastPhoenixRolls) {
      details.push(`${playerName(roll.player, aiOpponent)}'s ${roll.card} (${slotName(roll.slot)}) rolled ${roll.value}: ${roll.success ? "returned to hand" : "destroyed"}.`);
    }
    if (action.type === "attack" && !healthChanged) details.push("No runes lost health or were destroyed.");
    if (action.type === "endTurn" && after.winner === null) {
      details.push(`${playerName(after.currentPlayer, aiOpponent)}'s turn begins.`);
    }
    if (after.winner === "draw") details.push(`${drawDescription(after.drawReason)} The round is a draw.`);
    else if (after.winner !== null) details.push(`${playerName(after.winner, aiOpponent)} wins!`);
    return { turn: before.turn, summary: actionSummary(before, action, aiOpponent), details };
  }

  // src/action-feedback.js
  function getBattlefieldColumns(slots, columns = [0, 1, 2, 3]) {
    const occupied = columns.filter((column) => slots[column]);
    const empty = columns.filter((column) => !slots[column]);
    const occupiedStarts = [[], [5], [4, 6], [3, 5, 7], [2, 4, 6, 8]][occupied.length];
    const emptyStarts = [
      [2, 4, 6, 8],
      [1, 3, 7],
      [2, 8],
      [1],
      []
    ][occupied.length];
    return [
      ...occupied.map((column, index) => ({ column, start: occupiedStarts[index], span: 2 })),
      ...empty.map((column, index) => ({ column, start: emptyStarts[index], span: 2 }))
    ].sort((a, b) => a.start - b.start);
  }
  function getFrontlinePlacementOrder(slots, columns, emptyColumn, side) {
    const displayed = getBattlefieldColumns(slots, columns).map((item) => item.column);
    return side === "right" ? [...displayed.filter((column) => column !== emptyColumn), emptyColumn] : displayed;
  }
  function getFrontlineFifthAction(slots, selection2, actions) {
    if (slots.slice(0, 4).filter(Boolean).length !== 3) return null;
    if (selection2?.kind === "hand") {
      return actions.find((action) => action.type === "play" && action.slot < 4) ?? null;
    }
    if (selection2?.kind === "rune" && selection2.mode === "move" && selection2.slot >= 4) {
      return actions.find((action) => action.type === "move" && action.from === selection2.slot && action.to < 4 && !slots[action.to]) ?? null;
    }
    return null;
  }
  function playerName2(player, aiOpponent) {
    return aiOpponent && player === 1 ? "AI" : `Player ${player + 1}`;
  }
  function isActionTarget(selection2, actions, currentPlayer, targetPlayer, targetSlot) {
    if (selection2?.kind !== "rune") return false;
    if (selection2.mode === "attack") {
      return targetPlayer !== currentPlayer && actions.some((action) => action.type === "attack" && action.target === targetSlot);
    }
    if (selection2.mode !== "attribute") return false;
    return actions.some((action) => action.type === "attribute" && action.targetPlayer === targetPlayer && (action.targetSlot !== void 0 ? action.targetSlot === targetSlot : action.targetSlots?.includes(targetSlot)));
  }
  function isActionDamageTarget(game2, action, targetPlayer, targetSlot) {
    if (action.type === "attack") {
      const opponent = 1 - game2.currentPlayer;
      if (targetPlayer !== opponent) return false;
      if (action.target === targetSlot) return true;
      const attacker = game2.players[game2.currentPlayer].slots[action.slot];
      const target = game2.players[targetPlayer].slots[targetSlot];
      return getRuneAttribute(attacker) === "powerful" && action.target + 4 === targetSlot && (!target || targetSlot < 4 || getRuneAttribute(target) !== "cloak");
    }
    if (action.type === "attribute") {
      return action.targetPlayer === targetPlayer && (action.targetSlot === targetSlot || action.targetSlots?.includes(targetSlot));
    }
    return false;
  }
  function getTargetLinks(selection2, actions, currentPlayer, preview) {
    if (selection2?.kind !== "rune" || !["attack", "attribute"].includes(selection2.mode)) return [];
    const targets = selection2.mode === "attribute" ? [...new Set(selection2.targetSlots ?? [])].map((targetSlot) => ({ targetPlayer: 1 - currentPlayer, targetSlot })) : [];
    if (preview && isActionTarget(selection2, actions, currentPlayer, preview.targetPlayer, preview.targetSlot) && !targets.some((target) => target.targetPlayer === preview.targetPlayer && target.targetSlot === preview.targetSlot)) {
      targets.push(preview);
    }
    return targets.filter((target) => target.targetPlayer !== currentPlayer || target.targetSlot !== selection2.slot).map((target) => ({
      type: selection2.mode === "attack" ? "target-attack" : "target-attribute",
      sourcePlayer: currentPlayer,
      sourceSlot: selection2.slot,
      ...target
    }));
  }
  function getEffectLinks(game2) {
    return game2.players.flatMap((player, sourcePlayer) => player.slots.flatMap((source, sourceSlot) => {
      if (!source || isRuneDisabled(game2, sourcePlayer, sourceSlot)) return [];
      const attribute = getRuneAttribute(source);
      const spectral = attribute === "spectral" && sourceSlot < 4 && source.spectralEffect;
      const amplifying = attribute === "amplifying" && !source.stunned && source.amplifies;
      const soulbind = attribute === "soulbind" && !source.stunned && source.soulbinds;
      if (!spectral && !amplifying && !soulbind) return [];
      const targetPlayer = spectral ? 1 - sourcePlayer : sourcePlayer;
      const targetId = spectral ? source.spectralEffect.target : amplifying ? source.amplifies : source.soulbinds;
      const targetSlot = game2.players[targetPlayer].slots.findIndex((rune) => rune?.stack[0].id === targetId);
      return targetSlot < 0 ? [] : [{
        type: spectral ? "spectral" : amplifying ? "amplifying" : "soulbind",
        sourcePlayer,
        sourceSlot,
        targetPlayer,
        targetSlot
      }];
    }));
  }
  function getFocusCopyLinks(game2) {
    return game2.players.flatMap((player, sourcePlayer) => player.slots.flatMap((focus, sourceSlot) => {
      const sourceRuneId = focus?.focusCopy?.sourceRuneId;
      if (!sourceRuneId) return [];
      const targetSlot = player.slots.findIndex((rune) => rune?.stack[0].id === sourceRuneId);
      return targetSlot < 0 ? [] : [{
        type: "focus-copy",
        sourcePlayer,
        sourceSlot,
        targetPlayer: sourcePlayer,
        targetSlot
      }];
    }));
  }
  function getMovedRunes(before, after) {
    const player = before.currentPlayer;
    const oldSlots = before.players[player].slots;
    const newSlots = after.players[player].slots;
    return oldSlots.flatMap((rune, from) => {
      if (!rune) return [];
      const to = newSlots.findIndex((other) => other?.stack[0].id === rune.stack[0].id);
      if (to < 0) throw new Error("A moved rune is missing from the resulting battlefield.");
      return to === from ? [] : [{ player, from, to }];
    });
  }
  function getDestroyedAndPromoted(before, after) {
    const destroyed = [];
    const promoted = [];
    for (let player = 0; player < before.players.length; player++) {
      const oldSlots = before.players[player].slots;
      const newSlots = after.players[player].slots;
      for (let slot = 0; slot < oldSlots.length; slot++) {
        const rune = oldSlots[slot];
        if (!rune) continue;
        const nextSlot = newSlots.findIndex((other) => other?.stack[0].id === rune.stack[0].id);
        if (nextSlot < 0) {
          destroyed.push({ player, slot });
        } else if (slot >= 4 && nextSlot === slot - 4 && oldSlots[nextSlot] && !newSlots.some((other) => other?.stack[0].id === oldSlots[nextSlot].stack[0].id)) {
          promoted.push({ player, from: slot, to: nextSlot });
        }
      }
    }
    return { destroyed, promoted };
  }
  function createDiceFeedback(before, after, aiOpponent = false) {
    const cues = [];
    if (after.lastRoll) {
      const roll = after.lastRoll;
      cues.push({
        phase: "before-action",
        title: `${playerName2(before.currentPlayer, aiOpponent)} \xB7 ${roll.card}`,
        die: roll.value,
        text: roll.success ? "Success" : "Failure"
      });
    }
    for (const roll of after.lastDeflections) {
      cues.push({
        phase: "before-action",
        title: `${playerName2(roll.targetPlayer, aiOpponent)} \xB7 ${roll.card} \xB7 ${roll.targetSlot < 4 ? "frontline" : "backline"} ${roll.targetSlot % 4 + 1}`,
        die: roll.value,
        text: roll.success ? `Damage negated${roll.returned ? ` \xB7 ${roll.returned} returned` : ""}` : "Damage not negated"
      });
    }
    for (const roll of after.lastNecroticRolls) {
      cues.push({
        phase: "after-destruction",
        title: `${playerName2(roll.player, aiOpponent)} \xB7 Necrotic \xB7 ${roll.slot < 4 ? "frontline" : "backline"} ${roll.slot % 4 + 1}`,
        die: roll.value,
        text: `${roll.destroyed}: ${roll.success ? "Haunting added to hand" : "no Haunting added"}`
      });
    }
    for (const roll of after.lastPhoenixRolls) {
      cues.push({
        phase: "after-destruction",
        title: `${playerName2(roll.player, aiOpponent)} \xB7 ${roll.card} \xB7 ${roll.slot < 4 ? "frontline" : "backline"} ${roll.slot % 4 + 1}`,
        die: roll.value,
        text: roll.success ? "Returned to hand" : "Destroyed"
      });
    }
    return cues;
  }

  // src/hand-order.js
  function colorKey(card) {
    return [...card.colors].sort().join(" / ");
  }
  function orderHand(hand, order) {
    const groups = /* @__PURE__ */ new Map();
    for (const card of hand) {
      if (!groups.has(card.name)) groups.set(card.name, []);
      groups.get(card.name).push(card);
    }
    return [...groups.values()].sort(([a], [b]) => {
      const color = colorKey(a).localeCompare(colorKey(b));
      const rank = a.rank - b.rank;
      return (order === "color" ? color || rank : rank || color) || a.name.localeCompare(b.name);
    });
  }

  // src/app.js
  var RUNE_PARTICLE_COLORS = {
    blue: { color: "#65caff", glow: "#65caff" },
    purple: { color: "#d79bff", glow: "#d79bff" },
    green: { color: "#7dffb2", glow: "#7dffb2" },
    orange: { color: "#ffc16b", glow: "#ffc16b" },
    grey: { color: "#e0e5eb", glow: "#e0e5eb" },
    red: { color: "#ff6a75", glow: "#ff6a75" },
    black: { color: "#000000", glow: "#000000" }
  };
  var RUNE_EXCITEMENT_DURATION = 1e3;
  var RUNE_EXCITEMENT_FADE_DURATION = 1600;
  var RUNE_EXCITEMENT_FADE_STEP = 350;
  var excitedRunes = /* @__PURE__ */ new Map();
  var runeParticleDirections = /* @__PURE__ */ new Map();
  var $ = (id) => document.getElementById(id);
  var playerDecks = [prebuiltDecks[0].deck.slice(), prebuiltDecks[0].deck.slice()];
  var game = createGame(playerDecks);
  var startingPlayer = 0;
  var roundNumber = 1;
  var hasStarted = false;
  var savedDecks = [];
  var storageIssue = "";
  var setupDecks = [];
  var customDecks = [null, null];
  var draftDeck = [];
  var editorOrigin = "menu";
  var editingPlayer = 0;
  var selection = null;
  var draggedCardId = null;
  var draggedRune = null;
  var dragHoverTarget = null;
  var handOrder = "rank";
  var visualColumnOrder = [[0, 1, 2, 3], [0, 1, 2, 3]];
  var targetPreview = null;
  var focusTargetPreview = null;
  var inspected = null;
  var handoff = false;
  var handoffAfterDraw = false;
  var handoffPrompt = null;
  var drawOfferPhase = null;
  var setupMode = "local";
  var gameMode = "local";
  var aiDifficulty = "basic";
  var aiTimer = null;
  var aiPaused = false;
  var aiLog = null;
  var learningMatch = null;
  var frozenOpponent = null;
  var learningBusy = false;
  var learningStatus = "";
  var feedbackQueue = [];
  var currentFeedback = null;
  var feedbackTimer = null;
  var boardAnimation = null;
  var victoryPending = false;
  var message = "Select a rank 1 rune from your hand to begin.";
  function setDragImage(event, source) {
    const bounds = source.getBoundingClientRect();
    event.dataTransfer.setDragImage(
      source,
      Math.round(event.clientX - bounds.left),
      Math.round(event.clientY - bounds.top)
    );
  }
  function viewPlayer() {
    return gameMode === "ai" ? 0 : game.currentPlayer;
  }
  function isAiTurn() {
    return gameMode === "ai" && game.currentPlayer === 1 && game.winner === null;
  }
  function cancelAiTurn() {
    if (aiTimer !== null) clearTimeout(aiTimer);
    aiTimer = null;
  }
  function scheduleAiTurn() {
    if (!isAiTurn() || aiPaused || aiTimer !== null || document.querySelector("dialog[open]")) return;
    aiTimer = setTimeout(() => {
      aiTimer = null;
      if (!isAiTurn() || document.querySelector("dialog[open]")) return;
      const attempt = { before: game, decision: null, actualRolls: [], actionApplied: false, actionRecorded: false };
      try {
        const policy = learningMatch ?? frozenOpponent;
        attempt.decision = policy ? analyzeLearningDecision(game, policy.model, policy.random) : analyzeAiDecision(game, aiDifficulty);
        if (!attempt.decision?.action) throw new Error("No AI action was returned.");
        perform(attempt.decision.action, attempt);
      } catch (error) {
        if (aiLog) recordAiLogFailure(aiLog, attempt, game, error);
        aiPaused = true;
        message = `AI turn stopped: ${error.message}. Start a new game from the menu.`;
        console.error("AI turn failed:", error);
        render();
      }
    }, 400);
  }
  function pauseFeedback() {
    if (feedbackTimer !== null) clearTimeout(feedbackTimer);
    feedbackTimer = null;
    $("feedback-stage").hidden = true;
  }
  function resetFeedback() {
    pauseFeedback();
    feedbackQueue = [];
    currentFeedback = null;
    victoryPending = false;
    runeParticleDirections.clear();
  }
  function cancelBoardAnimation() {
    if (!boardAnimation) return;
    const active = boardAnimation;
    boardAnimation = null;
    for (const animation of active.animations) {
      animation.onfinish = null;
      animation.cancel();
    }
    for (const timer of active.timers) clearTimeout(timer);
    for (const source of active.sources) source.classList.remove("animation-origin");
    for (const clone of active.clones) clone.remove();
  }
  function pauseBoardAnimation() {
    if (boardAnimation) {
      for (const animation of boardAnimation.animations) {
        if (animation.playState !== "finished") animation.pause();
      }
    }
  }
  function resumeBoardAnimation() {
    if (boardAnimation && !document.querySelector("dialog[open]")) {
      for (const animation of boardAnimation.animations) {
        if (animation.playState === "paused") animation.play();
      }
    }
  }
  function animateBoardAction(before, after, action, onFinish) {
    cancelBoardAnimation();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const { destroyed, promoted } = getDestroyedAndPromoted(before, after);
    const moves = action.type === "move" ? getMovedRunes(before, after) : action.type === "attack" ? [{ player: before.currentPlayer, from: action.slot, to: action.target, targetPlayer: 1 - before.currentPlayer }] : [];
    const handCard = action.type === "play" || action.type === "upgrade" ? document.querySelector(`.hand-card[data-card-id="${action.cardId}"]`) : null;
    const playCard = action.type === "play" && Boolean(handCard);
    const upgradeCard = action.type === "upgrade";
    const upgradeCardFromHand = upgradeCard && Boolean(handCard);
    const handCardTravel = playCard || upgradeCardFromHand;
    if (!moves.length && !destroyed.length && !playCard && !upgradeCard) return false;
    const slot = (owner, position) => {
      const element = document.querySelector(`.slot[data-player="${owner}"][data-slot="${position}"]`);
      if (!element) throw new Error("Cannot animate a missing battlefield position.");
      return element;
    };
    const afterRects = /* @__PURE__ */ new Map();
    if (action.type === "move" || action.type === "play" || promoted.length) {
      const elements = [...document.querySelectorAll(".row .slot[data-player][data-slot]")];
      const originals = elements.map((element) => element.style.gridColumn);
      const layouts = after.players.map((player, index) => getBattlefieldColumns(player.slots, visualColumnOrder[index]));
      try {
        for (const element of elements) {
          const owner = Number(element.dataset.player);
          const position = Number(element.dataset.slot);
          const column = layouts[owner].find((item) => item.column === position % 4);
          element.style.gridColumn = `${column.start} / span ${column.span}`;
        }
        for (const element of elements) {
          afterRects.set(`${element.dataset.player}:${element.dataset.slot}`, element.getBoundingClientRect());
        }
      } finally {
        elements.forEach((element, index) => {
          element.style.gridColumn = originals[index];
        });
      }
    }
    const first = moves[0] ?? (destroyed.length ? { player: destroyed[0].player, from: destroyed[0].slot } : { player: before.currentPlayer, from: action.slot });
    if (typeof slot(first.player, first.from).animate !== "function") {
      console.warn("Card animations are unavailable in this browser.");
      return false;
    }
    const active = {
      animations: [],
      clones: [],
      sources: [],
      timers: [],
      visualSlots: before.players.map((player) => player.slots.slice()),
      layoutSlots: before.players.map((player) => player.slots.slice()),
      destroyedSlots: new Set(destroyed.map(({ player, slot: position }) => `${player}:${position}`)),
      stage: "death",
      pendingBursts: 0,
      animationFinished: false
    };
    const finishIfReady = () => {
      if (boardAnimation !== active || !active.animationFinished || active.pendingBursts > 0) return;
      cancelBoardAnimation();
      onFinish();
    };
    const clones = /* @__PURE__ */ new Map();
    let lastAnimation = null;
    let latestEnd = 0;
    const animate = (element, keyframes, options) => {
      const animation = element.animate(keyframes, options);
      active.animations.push(animation);
      const end = (options.delay ?? 0) + options.duration;
      if (end >= latestEnd) {
        latestEnd = end;
        lastAnimation = animation;
      }
      return animation;
    };
    const cloneRune = (player, position) => {
      const key = `${player}:${position}`;
      if (clones.has(key)) return clones.get(key);
      const source = slot(player, position);
      const rect = source.getBoundingClientRect();
      const clone = source.cloneNode(true);
      clone.className = "slot motion-card occupied";
      clone.removeAttribute("data-player");
      clone.removeAttribute("data-slot");
      clone.setAttribute("aria-hidden", "true");
      clone.inert = true;
      Object.assign(clone.style, {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      });
      document.body.append(clone);
      source.classList.add("animation-origin");
      active.sources.push(source);
      active.clones.push(clone);
      const result = { clone, rect };
      clones.set(key, result);
      return result;
    };
    const delta = (from, to) => {
      return {
        x: to.left + to.width / 2 - from.left - from.width / 2,
        y: to.top + to.height / 2 - from.top - from.height / 2
      };
    };
    boardAnimation = active;
    for (const move of moves) {
      const { clone, rect } = cloneRune(move.player, move.from);
      const target = slot(move.targetPlayer ?? move.player, move.to);
      const targetRect = action.type === "attack" ? target.getBoundingClientRect() : afterRects.get(`${move.targetPlayer ?? move.player}:${move.to}`);
      const { x, y } = delta(rect, targetRect);
      const keyframes = action.type === "attack" ? [
        { transform: "translate(0, 0)", offset: 0 },
        { transform: `translate(${x}px, ${y}px)`, offset: 0.62 },
        { transform: "translate(0, 0)", offset: 1 }
      ] : [{ transform: "translate(0, 0)" }, { transform: `translate(${x}px, ${y}px)` }];
      animate(clone, keyframes, { duration: 600, easing: "ease-in-out", fill: "forwards" });
      if (action.type === "attack") {
        const targetDestroyed = destroyed.some((item) => item.player === move.targetPlayer && item.slot === move.to);
        const hit = targetDestroyed ? cloneRune(move.targetPlayer, move.to).clone : target;
        animate(
          hit,
          [{ filter: "brightness(1)" }, { filter: "brightness(2)" }, { filter: "brightness(1)" }],
          { delay: 330, duration: 240, easing: "ease-out" }
        );
      }
    }
    if (handCardTravel) {
      const card = before.players[before.currentPlayer].hand.find((item) => item.id === action.cardId);
      if (!card) throw new Error("Cannot animate a card that is missing from its hand.");
      const source = handCard;
      const rect = source.getBoundingClientRect();
      const clone = source.cloneNode(true);
      clone.className = "slot motion-card occupied";
      clone.removeAttribute("data-card-id");
      clone.setAttribute("aria-hidden", "true");
      clone.inert = true;
      Object.assign(clone.style, {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      });
      document.body.append(clone);
      if (source) {
        source.classList.add("animation-origin");
        active.sources.push(source);
      }
      active.clones.push(clone);
      const targetRect = playCard ? afterRects.get(`${before.currentPlayer}:${action.slot}`) : slot(before.currentPlayer, action.slot).getBoundingClientRect();
      const { x, y } = delta(rect, targetRect);
      animate(
        clone,
        [
          { transform: "translate(0, 0) scale(1)" },
          { transform: `translate(${x}px, ${y}px) scale(.8)` }
        ],
        { duration: 650, easing: "cubic-bezier(.2,.8,.25,1)", fill: "forwards" }
      );
    }
    if (upgradeCard && !handCard) {
      const { clone } = cloneRune(before.currentPlayer, action.slot);
      const newCard = after.players[before.currentPlayer].slots[action.slot].stack.at(-1);
      const image = clone.querySelector(".card-art");
      active.timers.push(setTimeout(() => {
        image.src = newCard.image;
        clone.querySelector(".card-rank").src = `Cards online/rank${newCard.rank}.png`;
      }, 280));
      animate(clone, [
        { transform: "perspective(700px) rotateY(0) scale(1)", filter: "brightness(1)" },
        { transform: "perspective(700px) rotateY(90deg) scale(1.08)", filter: "brightness(2)" },
        { transform: "perspective(700px) rotateY(0) scale(1)", filter: "brightness(1.4)" }
      ], { duration: 620, easing: "ease-in-out", fill: "forwards" });
    }
    const destructionDelay = moves.length || handCardTravel ? 600 : 0;
    const deathAnimationDuration = 650;
    const burstLeadIn = 1100;
    const slotMovementDelay = destructionDelay + deathAnimationDuration + burstLeadIn;
    for (const item of destroyed) {
      const { clone } = cloneRune(item.player, item.slot);
      if (action.type === "upgrade" && item.player === before.currentPlayer && item.slot === action.slot) {
        const card = before.players[item.player].hand.find((card2) => card2.id === action.cardId);
        clone.querySelector(".card-art").src = card.image;
        clone.querySelector(".card-rank").src = `Cards online/rank${card.rank}.png`;
      }
      const deathAnimation = animate(clone, [
        { opacity: 1, filter: "brightness(1)", transform: "scale(1)", offset: 0 },
        { opacity: 1, filter: "brightness(2.5) sepia(1) saturate(4)", transform: "scale(1.04)", offset: 0.25 },
        { opacity: 1, filter: "brightness(2.5) sepia(1) saturate(4)", transform: "scale(1.04)", offset: 0.78 },
        { opacity: 0, filter: "brightness(.6) sepia(1)", transform: "scale(1)", offset: 1 }
      ], { delay: destructionDelay, duration: deathAnimationDuration, easing: "ease-in", fill: "forwards" });
      deathAnimation.onfinish = () => {
        const { puff, lifetime: burstLifetime } = emitDeathParticlePuff(clone);
        if (boardAnimation !== active) return;
        if (puff) active.clones.push(puff);
        active.pendingBursts++;
        if (!active.deathResolved) {
          active.deathResolved = true;
          active.stage = "burst";
          render();
          if (promoted.length) {
            active.timers.push(setTimeout(() => {
              if (boardAnimation !== active) return;
              active.stage = "moving";
              for (const item2 of promoted) active.visualSlots[item2.player][item2.from] = null;
              render();
            }, burstLeadIn - 20));
          }
        }
        active.timers.push(setTimeout(() => {
          if (boardAnimation !== active) return;
          active.pendingBursts--;
          if (active.pendingBursts !== 0) return;
          for (const item2 of destroyed) active.visualSlots[item2.player][item2.slot] = null;
          active.layoutSlots = after.players.map((player) => player.slots.slice());
          active.stage = "cleared";
          render();
          finishIfReady();
        }, burstLifetime));
      };
    }
    for (const item of promoted) {
      const { clone, rect } = cloneRune(item.player, item.from);
      const { x, y } = delta(rect, afterRects.get(`${item.player}:${item.to}`));
      animate(
        clone,
        [{ transform: "translate(0, 0)" }, { transform: `translate(${x}px, ${y}px)` }],
        { delay: slotMovementDelay, duration: 500, easing: "ease-in-out", fill: "forwards" }
      );
    }
    const lastAnimationOnFinish = lastAnimation.onfinish;
    lastAnimation.onfinish = () => {
      lastAnimationOnFinish?.();
      if (boardAnimation !== active) return;
      active.animationFinished = true;
      finishIfReady();
    };
    return true;
  }
  function showDamageFeedback(before, after, action) {
    for (let player = 0; player < after.players.length; player++) {
      for (let slot = 0; slot < after.players[player].slots.length; slot++) {
        const rune = after.players[player].slots[slot];
        if (!rune) continue;
        const oldSlot = before.players[player].slots.findIndex((previous) => previous?.stack[0].id === rune.stack[0].id);
        if (oldSlot < 0) continue;
        const previousRune = before.players[player].slots[oldSlot];
        const oldHealth = getRuneStats(previousRune, before.players[player]).health;
        const newHealth = getRuneStats(rune, after.players[player]).health;
        const damage = (rune.damage ?? 0) - (previousRune.damage ?? 0) + (previousRune.temporaryHealth ?? 0) - (rune.temporaryHealth ?? 0);
        if (damage <= 0) continue;
        addDamageFeedback(player, oldSlot, oldHealth, newHealth, damage);
      }
    }
    for (let player = 0; player < before.players.length; player++) {
      for (let slot = 0; slot < before.players[player].slots.length; slot++) {
        const rune = before.players[player].slots[slot];
        if (!rune || after.players.some((owner) => owner.slots.some((next) => next?.stack[0].id === rune.stack[0].id))) continue;
        const attribute = action.type === "attribute" && player === before.currentPlayer && slot === action.slot ? getRuneAttribute(rune) : null;
        const targeted = isActionDamageTarget(before, action, player, slot);
        const healthCost = attribute === "bolt" || attribute === "masterful";
        if (!targeted && !healthCost) continue;
        const oldHealth = getRuneStats(rune, before.players[player]).health;
        if (oldHealth > 0) addDamageFeedback(player, slot, oldHealth, 0, oldHealth);
      }
    }
  }
  function addDamageFeedback(player, slot, oldHealth, newHealth, damage) {
    const position = document.querySelector(`.slot[data-player="${player}"][data-slot="${slot}"]`);
    if (!position) return;
    const health = position.querySelector(".health");
    const rect = health?.getBoundingClientRect() ?? position.getBoundingClientRect();
    const cue = node("span", "damage-feedback", `HP ${oldHealth}`);
    Object.assign(cue.style, { left: `${rect.left + rect.width / 2}px`, top: `${rect.top}px` });
    document.body.append(cue);
    if (typeof cue.animate === "function" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cue.animate([
        { opacity: 0, transform: "translate(-50%, 6px) scale(.9)" },
        { opacity: 1, transform: "translate(-50%, -2px) scale(1)", offset: 0.12 },
        { opacity: 1, transform: "translate(-50%, -12px) scale(1)", offset: 0.82 },
        { opacity: 0, transform: "translate(-50%, -22px) scale(1.08)" }
      ], { duration: 2e3, easing: "ease-out" }).onfinish = () => cue.remove();
    } else {
      setTimeout(() => cue.remove(), 2e3);
    }
    setTimeout(() => {
      if (cue.isConnected) cue.textContent = newHealth === 0 ? `-${damage} HP \xB7 OUT` : `-${damage} HP`;
    }, 240);
  }
  function showVictory() {
    if (!victoryPending || boardAnimation || currentFeedback || feedbackQueue.length || document.querySelector("dialog[open]")) return;
    victoryPending = false;
    const drawn = game.winner === "draw";
    $("victory-label").textContent = drawn ? "ROUND DRAWN" : "VICTORY";
    $("victory-title").textContent = drawn ? "It's a draw!" : `${gameMode === "ai" && game.winner === 1 ? "AI" : `Player ${game.winner + 1}`} wins!`;
    $("victory-message").textContent = drawn ? `${drawDescription(game.drawReason)} Play another round to determine the winner.` : "The battle is over.";
    $("victory-next-round").hidden = !drawn;
    $("victory-dialog").showModal();
  }
  function showNextFeedback() {
    if (feedbackTimer !== null || document.querySelector("dialog[open]")) return;
    if (!currentFeedback) currentFeedback = feedbackQueue.shift() ?? null;
    if (!currentFeedback) {
      $("feedback-stage").hidden = true;
      showVictory();
      scheduleAiTurn();
      return;
    }
    const card = node("div", "feedback-card");
    card.append(node("div", "feedback-title", currentFeedback.title));
    card.append(node("div", "feedback-die", String(currentFeedback.die)));
    card.append(node("div", "feedback-text", currentFeedback.text));
    $("feedback-stage").replaceChildren(card);
    $("feedback-stage").hidden = false;
    feedbackTimer = setTimeout(() => {
      feedbackTimer = null;
      currentFeedback = null;
      $("feedback-stage").hidden = true;
      showNextFeedback();
    }, 1300);
  }
  function queueDiceFeedback(cues) {
    feedbackQueue.push(...cues);
    showNextFeedback();
  }
  function flashActionSlots(before, action) {
    const player = before.currentPlayer;
    const positions = [];
    if (["play", "upgrade", "attribute", "chooseFocus"].includes(action.type)) positions.push([player, action.slot]);
    if (action.type === "attribute") {
      if (action.targetSlot !== void 0) positions.push([action.targetPlayer, action.targetSlot]);
      for (const slot of action.targetSlots ?? []) positions.push([action.targetPlayer, slot]);
    }
    for (const [owner, slot] of positions) {
      document.querySelector(`.slot[data-player="${owner}"][data-slot="${slot}"]`)?.classList.add("feedback-slot");
    }
  }
  function randomizeRuneParticleDirection(particle) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 8 + Math.random() * 12;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const originX = Math.random() * 40 - 20;
    const originY = Math.random() * 40 - 20;
    const direction = { originX, originY, x, y };
    const key = particle.dataset.directionKey;
    if (key) runeParticleDirections.set(key, direction);
    applyRuneParticleDirection(particle, direction);
  }
  function applyRuneParticleDirection(particle, direction) {
    particle.style.setProperty("--particle-origin-x", `${direction.originX}px`);
    particle.style.setProperty("--particle-origin-y", `${direction.originY}px`);
    particle.style.setProperty("--particle-mid-x", `${direction.x}px`);
    particle.style.setProperty("--particle-mid-y", `${direction.y}px`);
    particle.style.setProperty("--particle-end-x", `${direction.x * 1.6}px`);
    particle.style.setProperty("--particle-end-y", `${direction.y * 1.6}px`);
  }
  function restoreRuneParticleDirection(particle, key) {
    particle.dataset.directionKey = key;
    const direction = runeParticleDirections.get(key);
    if (direction) applyRuneParticleDirection(particle, direction);
    else randomizeRuneParticleDirection(particle);
  }
  function addExcitedParticles(particles, count = 4) {
    const offsets = [0.15, 0.65, 1.7, 2.4];
    const player = particles.dataset.player;
    const runeId = particles.dataset.runeId;
    const existing = new Set([...particles.querySelectorAll(".rune-particle-excited")].map((spark) => Number(spark.dataset.particleIndex)));
    for (let index = 0; index < count; index++) {
      if (existing.has(index)) continue;
      const spark = node("span", "rune-particle rune-particle-excited");
      spark.dataset.particleIndex = String(index);
      const directionKey = `${player}:${runeId}:excited:${index}`;
      restoreRuneParticleDirection(spark, directionKey);
      spark.style.animationDelay = `-${(performance.now() / 1e3 + offsets[index]) % 1.9}s`;
      spark.addEventListener("animationiteration", () => randomizeRuneParticleDirection(spark));
      particles.append(spark);
    }
  }
  function runeParticleLayers(player, runeId) {
    return [...document.querySelectorAll(".rune-particles")].filter((particles) => particles.dataset.player === String(player) && particles.dataset.runeId === String(runeId));
  }
  function clearRuneExcitementTimers(excitement) {
    clearTimeout(excitement.timer);
    for (const timer of excitement.fadeTimers ?? []) clearTimeout(timer);
  }
  function expireRuneExcitement(player, runeId, excitement) {
    const excitementKey = `${player}:${runeId}`;
    if (excitedRunes.get(excitementKey) !== excitement) return;
    excitement.cooling = true;
    const layers = runeParticleLayers(player, runeId);
    const counts = layers.map((particles) => particles.querySelectorAll(".rune-particle-excited").length).filter(Boolean);
    excitement.remainingExcitedParticles = counts.length ? Math.min(...counts) : 4;
    excitement.fadeTimers = [];
    for (const particles of layers) {
      particles.classList.add("cooling");
    }
    for (let step = 1; step <= 4; step++) {
      excitement.fadeTimers.push(setTimeout(() => {
        if (excitedRunes.get(excitementKey) !== excitement) return;
        excitement.remainingExcitedParticles = Math.max(0, excitement.remainingExcitedParticles - 1);
        for (const particles of runeParticleLayers(player, runeId)) {
          particles.querySelector(".rune-particle-excited")?.remove();
        }
      }, step * RUNE_EXCITEMENT_FADE_STEP));
    }
    excitement.timer = setTimeout(() => {
      if (excitedRunes.get(excitementKey) !== excitement) return;
      excitedRunes.delete(excitementKey);
      for (const particles of runeParticleLayers(player, runeId)) {
        particles.classList.remove("cooling");
        particles.querySelectorAll(".rune-particle-excited").forEach((spark) => spark.remove());
      }
    }, RUNE_EXCITEMENT_FADE_DURATION);
  }
  function scheduleRuneExcitementExpiry(player, runeId, excitement) {
    excitement.timer = setTimeout(() => {
      if (excitedRunes.get(`${player}:${runeId}`) !== excitement) return;
      const layers = runeParticleLayers(player, runeId);
      if (layers.some((particles) => particles.closest(".slot")?.matches(":hover"))) {
        excitement.expiresAt = performance.now() + RUNE_EXCITEMENT_DURATION;
        for (const particles of layers) {
          particles.classList.remove("cooling");
          addExcitedParticles(particles);
        }
        scheduleRuneExcitementExpiry(player, runeId, excitement);
        return;
      }
      expireRuneExcitement(player, runeId, excitement);
    }, Math.max(0, excitement.expiresAt - performance.now()));
  }
  function exciteRuneParticles(player, runeId) {
    const particles = [...document.querySelectorAll(".rune-particles")].find((element) => element.dataset.player === String(player) && element.dataset.runeId === String(runeId));
    if (!particles) return;
    const now = performance.now();
    const excitementKey = `${player}:${runeId}`;
    const previous = excitedRunes.get(excitementKey);
    if (previous) clearRuneExcitementTimers(previous);
    const excitement = { expiresAt: Math.max(previous?.expiresAt ?? 0, now + RUNE_EXCITEMENT_DURATION) };
    excitedRunes.set(excitementKey, excitement);
    scheduleRuneExcitementExpiry(player, runeId, excitement);
    particles.classList.remove("cooling");
    addExcitedParticles(particles);
  }
  function emitParticleBurst(particles, options) {
    let lifetime = 0;
    for (let index = 0; index < options.count; index++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = options.minDistance + Math.random() * (options.maxDistance - options.minDistance);
      const startDistance = Math.random() * 8;
      const duration = options.minDuration + Math.random() * (options.maxDuration - options.minDuration);
      const delay = Math.random() * options.maxDelay;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance + (options.driftY ?? 0);
      const effect = options.effect === "death" ? " rune-death-particle" : "";
      const spark = node("span", `rune-surge-particle${effect}${index % 2 ? " rune-surge-secondary" : ""}`);
      spark.style.setProperty("--surge-size", `${options.minSize + Math.random() * (options.maxSize - options.minSize)}px`);
      spark.style.setProperty("--surge-start-x", `${Math.cos(angle) * startDistance}px`);
      spark.style.setProperty("--surge-start-y", `${Math.sin(angle) * startDistance}px`);
      spark.style.setProperty("--surge-mid-x", `${endX * 0.5 + (Math.random() - 0.5) * 18}px`);
      spark.style.setProperty("--surge-mid-y", `${endY * 0.5 + (Math.random() - 0.5) * 18}px`);
      spark.style.setProperty("--surge-spin", `${(Math.random() - 0.5) * 720}deg`);
      spark.style.setProperty("--surge-x", `${endX}px`);
      spark.style.setProperty("--surge-y", `${endY}px`);
      spark.style.setProperty("--surge-duration", `${duration}s`);
      spark.style.setProperty("--surge-delay", `${delay}s`);
      particles.append(spark);
      const cleanupDelay = (duration + delay) * 1e3 + 100;
      lifetime = Math.max(lifetime, cleanupDelay);
      setTimeout(() => spark.remove(), cleanupDelay);
    }
    return lifetime;
  }
  function emitDeathParticlePuff(clone) {
    const visual = clone.querySelector(".card-visual");
    if (!visual) return { puff: null, lifetime: 0 };
    const sourceParticles = visual.querySelector(".rune-particles");
    if (!sourceParticles) return { puff: null, lifetime: 0 };
    const rect = visual.getBoundingClientRect();
    const puff = node("span", "rune-death-particles");
    Object.assign(puff.style, {
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`
    });
    const particleStyles = getComputedStyle(visual);
    for (const variable of ["--rune-color-primary", "--rune-glow-primary", "--rune-color-secondary", "--rune-glow-secondary"]) {
      puff.style.setProperty(variable, particleStyles.getPropertyValue(variable));
    }
    document.body.append(puff);
    const lifetime = emitParticleBurst(puff, {
      count: 32,
      minDistance: 24,
      maxDistance: 70,
      minDuration: 0.45,
      maxDuration: 0.8,
      maxDelay: 0.05,
      minSize: 2.5,
      maxSize: 5.5,
      effect: "death"
    });
    setTimeout(() => puff.remove(), lifetime + 100);
    return { puff, lifetime: lifetime + 100 };
  }
  function highlightTurn() {
    for (const id of ["turn-display", "center-line", "command-turn"]) {
      const element = $(id);
      element.classList.remove("turn-changed");
      void element.offsetWidth;
      element.classList.add("turn-changed");
    }
  }
  function learningAvailable() {
    if (!navigator.locks || typeof navigator.locks.request !== "function" || !window.crypto?.getRandomValues) {
      throw new Error("This browser cannot safely store Learning AI data. Use a current desktop browser.");
    }
  }
  function learningControlsLocked() {
    return learningBusy || Boolean(learningMatch && (learningMatch.saving || learningMatch.pending || hasStarted && !learningMatch.finished));
  }
  function refreshLearningSettings() {
    let valid = false;
    let canSnapshot = false;
    try {
      learningAvailable();
      const { raw, model } = loadLearningCheckpoint(window.localStorage);
      $("learning-progress").textContent = `Completed games: ${model.games} \xB7 AI wins: ${model.wins}`;
      if (!$("snapshot-name").value) $("snapshot-name").value = `Level ${model.games}`;
      valid = true;
      try {
        const snapshots = loadLearningSnapshots(window.localStorage);
        $("snapshot-list").textContent = snapshots.length ? `Saved opponents: ${snapshots.map((snapshot) => `${snapshot.name} (${snapshot.model.games} games)`).join(", ")}` : "No saved opponents yet.";
        if (raw === null) $("snapshot-list").textContent += " No saved Learning AI model is available to snapshot.";
        canSnapshot = raw !== null;
      } catch (error) {
        $("snapshot-list").textContent = `Saved AI opponents unavailable: ${error.message}`;
      }
    } catch (error) {
      $("learning-progress").textContent = `Learning data unavailable: ${error.message}`;
      $("snapshot-list").textContent = "";
    }
    $("learning-status").textContent = learningStatus || (learningControlsLocked() ? "Saving an opponent, reset and import are unavailable during a Learning game or while an update is pending." : "");
    $("learning-export").disabled = !valid || learningBusy;
    $("snapshot-save").disabled = !canSnapshot || learningControlsLocked();
    $("learning-reset").disabled = learningControlsLocked();
    $("learning-import").disabled = learningControlsLocked();
  }
  function renderLearningStatus() {
    const active = Boolean(learningMatch);
    $("learning-match-status").hidden = !active;
    $("learning-retry").hidden = !active || !learningMatch.pending || learningMatch.saving;
    $("learning-pending-export").hidden = !active || !learningMatch.pending || learningMatch.saving;
    $("learning-discard").hidden = !active || !learningMatch.pending || learningMatch.saving;
    if (active) $("learning-match-status").textContent = learningMatch.status;
  }
  function downloadJson(value2, filename) {
    const url = URL.createObjectURL(new Blob([value2], { type: "application/json" }));
    try {
      const link = node("a");
      link.href = url;
      link.download = filename;
      document.body.append(link);
      link.click();
      link.remove();
    } finally {
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
    }
  }
  async function saveLearningResult(match) {
    if (!match.pending || match.saving) return;
    match.saving = true;
    match.status = "Saving the completed game's learning update...";
    match.log.learning.update = { status: "saving" };
    if (learningMatch === match) renderLearningStatus();
    try {
      const saved = await commitLearningModel(window.localStorage, navigator.locks, match.raw, match.pending);
      match.pending = null;
      match.status = `Learning update saved. Completed games: ${saved.games}.`;
      match.log.learning.update = { status: "saved", revision: saved.revision, games: saved.games };
    } catch (error) {
      match.status = `Learning update not saved: ${error.message} Retry or export the pending data before starting a new game.`;
      match.log.learning.update = { status: "failed", error: error.message };
      console.error("Could not save learning update:", error);
    } finally {
      match.saving = false;
      if (learningMatch === match) renderLearningStatus();
      if ($("setup-dialog").open) updateSetup();
      if ($("learning-dialog").open) refreshLearningSettings();
    }
  }
  function finishLearningMatch() {
    const match = learningMatch;
    if (!match || match.finished || game.winner === null) return;
    if (game.winner === "draw") {
      match.status += " Round drawn; learning updates when the match has a winner.";
      renderLearningStatus();
      return;
    }
    match.finished = true;
    match.log.learning.result = { winner: game.winner, decisions: match.episode.decisions };
    try {
      match.pending = updateLearningModel(match.model, match.episode, game.winner, 1, match.id);
      void saveLearningResult(match);
    } catch (error) {
      match.status = `Learning update could not be prepared: ${error.message}`;
      match.log.learning.update = { status: "failed", error: error.message };
      console.error("Could not prepare learning update:", error);
      renderLearningStatus();
    }
  }
  function refreshSavedDecks() {
    try {
      savedDecks = loadSavedDecks(window.localStorage);
      storageIssue = "";
    } catch (error) {
      savedDecks = [];
      storageIssue = `Saved decks are unavailable: ${error.message}. Existing data was not changed.`;
    }
  }
  function fillDeckChoices(select, current, customLabel = "Current custom deck", includeCustom = false) {
    select.replaceChildren();
    if (select.id.startsWith("setup-deck-")) {
      const option = node("option", null, "Random deck");
      option.value = "random";
      select.append(option);
    }
    if (current === "custom" || select.id === "deck-load" || includeCustom) {
      const option = node("option", null, customLabel);
      option.value = "custom";
      select.append(option);
    }
    const presets = node("optgroup");
    presets.label = "Prebuilt decks";
    for (const preset of prebuiltDecks) {
      const option = node("option", null, preset.name);
      option.value = `preset:${preset.id}`;
      presets.append(option);
    }
    select.append(presets);
    if (savedDecks.length) {
      const saved = node("optgroup");
      saved.label = "Saved decks";
      for (const entry of savedDecks) {
        const option = node("option", null, entry.name);
        option.value = `saved:${entry.name}`;
        saved.append(option);
      }
      select.append(saved);
    }
    if (select.id.startsWith("setup-deck-") && current.startsWith("saved:") && !savedDecks.some((entry) => `saved:${entry.name}` === current)) {
      const option = node("option", null, `${current.slice(6)} (unavailable)`);
      option.value = current;
      select.append(option);
    }
    select.value = current;
    if (select.selectedIndex < 0) throw new Error("The selected deck is unavailable.");
  }
  function getChosenDeck(value2) {
    const entry = value2.startsWith("preset:") ? prebuiltDecks.find((deck) => deck.id === value2.slice(7)) : savedDecks.find((deck) => `saved:${deck.name}` === value2);
    if (!entry) throw new Error("The selected deck is unavailable.");
    return entry.deck.slice();
  }
  function updateSetup() {
    const againstAi = setupMode === "ai";
    $("mode-local").classList.toggle("mode-selected", !againstAi);
    $("mode-ai").classList.toggle("mode-selected", againstAi);
    $("mode-local").setAttribute("aria-pressed", String(!againstAi));
    $("mode-ai").setAttribute("aria-pressed", String(againstAi));
    $("ai-difficulty-label").hidden = !againstAi;
    $("starting-player-2").textContent = againstAi ? "AI" : "Player 2";
    $("setup-deck-label-1").textContent = againstAi ? "AI deck" : "Player 2 deck";
    $("setup-edit-1").textContent = againstAi ? "Build / edit AI deck" : "Build / edit Player 2 deck";
    $("setup-start").textContent = againstAi ? "Start game against AI" : "Start local game";
    let unavailableDeck = false;
    for (let player = 0; player < 2; player++) {
      const selected = setupDecks[player];
      if (selected.choice.startsWith("saved:")) {
        const saved = savedDecks.find((entry) => `saved:${entry.name}` === selected.choice);
        if (saved) selected.deck = saved.deck.slice();
        else unavailableDeck = true;
      }
      fillDeckChoices($(`setup-deck-${player}`), selected.choice, customDecks[player]?.label, Boolean(customDecks[player]));
      $(`setup-summary-${player}`).textContent = selected.choice === "random" ? "A prebuilt or saved deck will be chosen at the start." : `${selected.deck.length} cards \xB7 ${deckRank(selected.deck)}/${DECK_RANK_LIMIT} ranks`;
      $(`setup-edit-${player}`).disabled = selected.choice === "random";
    }
    const difficulty = $("ai-difficulty");
    const selectedDifficulty = difficulty.value;
    let snapshots = [];
    let snapshotError = "";
    try {
      snapshots = loadLearningSnapshots(window.localStorage);
    } catch (error) {
      snapshotError = `Saved AI opponents unavailable: ${error.message}`;
    }
    const opponents = availableLearningOpponents(snapshots);
    difficulty.replaceChildren(new Option("Basic", "basic"), new Option("Learning (experimental)", "learning"));
    for (const opponent of opponents) {
      difficulty.add(new Option(opponent.label, opponent.value));
    }
    if (selectedDifficulty.startsWith("snapshot:") && !opponents.some((opponent) => opponent.value === selectedDifficulty)) {
      difficulty.add(new Option(`${selectedDifficulty.slice(9)} (unavailable)`, selectedDifficulty));
    }
    difficulty.value = selectedDifficulty || "basic";
    const randomUnavailable = Boolean(storageIssue) && setupDecks.some((entry) => entry.choice === "random");
    const usingLearning = againstAi && difficulty.value === "learning";
    const usingSnapshot = againstAi && (difficulty.value.startsWith("snapshot:") || difficulty.value.startsWith("builtin:"));
    $("learning-setup-status").hidden = !usingLearning && !usingSnapshot && !snapshotError;
    let learningUnavailable = false;
    if (usingSnapshot) {
      const snapshot = opponents.find((entry) => entry.value === difficulty.value);
      learningUnavailable = !snapshot;
      $("learning-setup-status").textContent = snapshot ? `Frozen opponent: ${snapshot.model.games} completed learning games. It does not learn from this match.` : snapshotError || "The selected saved opponent is unavailable.";
    } else if (usingLearning) {
      try {
        learningAvailable();
        const { model } = loadLearningCheckpoint(window.localStorage);
        $("learning-setup-status").textContent = `Experimental: ${model.games} completed learning games. It updates only after a completed game.`;
      } catch (error) {
        learningUnavailable = true;
        $("learning-setup-status").textContent = `Learning AI unavailable: ${error.message}`;
      }
    } else if (snapshotError) $("learning-setup-status").textContent = snapshotError;
    $("setup-start").disabled = randomUnavailable || unavailableDeck || learningUnavailable || learningBusy || Boolean(learningMatch?.saving);
    $("setup-status").textContent = storageIssue + (randomUnavailable ? " Random selection requires access to saved decks." : "") + (unavailableDeck ? " A selected saved deck is unavailable; choose or edit a deck before starting." : "");
    $("setup-previous-ai-log").hidden = !aiLog;
  }
  function updateDeckEditor() {
    const cardList = $("deck-cards");
    const scrollTop = cardList.scrollTop;
    const total = deckRank(draftDeck);
    $("deck-status").textContent = `${draftDeck.length} ${draftDeck.length === 1 ? "card" : "cards"}, ${total}/${DECK_RANK_LIMIT} ranks.${total === DECK_RANK_LIMIT ? " Remove cards to make room." : ""}`;
    const selectedRanks = new Set([...$("deck-rank-filters").querySelectorAll("input:checked")].map((input) => Number(input.value)));
    const selectedColors = new Set([...$("deck-color-filters").querySelectorAll("input:checked")].map((input) => input.value));
    const onlyInDeck = $("deck-in-deck-filter").checked;
    const sortOrder = $("deck-sort").value;
    const tiles = [...cardList.querySelectorAll(".deck-card")];
    tiles.sort((first, second) => {
      const firstCard = cards[first.dataset.cardKey];
      const secondCard = cards[second.dataset.cardKey];
      if (sortOrder === "rank-asc" && firstCard.rank !== secondCard.rank) {
        return firstCard.rank - secondCard.rank;
      }
      if (sortOrder === "rank-desc" && firstCard.rank !== secondCard.rank) {
        return secondCard.rank - firstCard.rank;
      }
      return firstCard.name.localeCompare(secondCard.name);
    });
    let visibleCards = 0;
    for (const tile of tiles) {
      const card = cards[tile.dataset.cardKey];
      const count = draftDeck.filter((entry) => entry === card).length;
      tile.querySelector(".deck-count").textContent = String(count);
      const remove = tile.querySelector(".deck-remove");
      const add = tile.querySelector(".deck-add");
      remove.disabled = count === 0;
      add.disabled = total + card.rank > DECK_RANK_LIMIT;
      remove.setAttribute("aria-label", `Remove ${card.name} from deck`);
      add.setAttribute("aria-label", `Add ${card.name} to deck`);
      tile.hidden = selectedRanks.size > 0 && !selectedRanks.has(card.rank) || selectedColors.size > 0 && !card.colors.some((color) => selectedColors.has(color)) || onlyInDeck && count === 0;
      if (!tile.hidden) visibleCards++;
    }
    cardList.append(...tiles, $("deck-empty-results"));
    cardList.scrollTop = scrollTop;
    $("deck-empty-results").hidden = visibleCards > 0;
    const valid = draftDeck.some((card) => card.rank === 1);
    $("deck-validation").textContent = storageIssue || (valid ? "Deck is ready." : "A deck needs at least one rank 1 rune.");
    $("deck-use").disabled = !valid;
    $("deck-save").disabled = !valid || Boolean(storageIssue);
    $("deck-delete").disabled = Boolean(storageIssue) || !$("deck-load").value.startsWith("saved:");
  }
  function createDeckFilters() {
    const ranks = [...new Set(Object.values(cards).map((card) => card.rank))].sort((a, b) => a - b);
    const colors = [...new Set(Object.values(cards).flatMap((card) => card.colors))].sort();
    for (const rank of ranks) {
      const label = node("label", "deck-filter-option");
      const input = node("input");
      input.type = "checkbox";
      input.value = String(rank);
      label.append(input, node("span", null, String(rank)));
      $("deck-rank-filters").append(label);
    }
    for (const color of colors) {
      const label = node("label", "deck-filter-option");
      const input = node("input");
      input.type = "checkbox";
      input.value = color;
      label.append(input, node("span", null, color[0].toUpperCase() + color.slice(1)));
      $("deck-color-filters").append(label);
    }
  }
  function createDeckCards() {
    const container = $("deck-cards");
    for (const [key, card] of Object.entries(cards)) {
      const tile = node("div", "deck-card");
      tile.dataset.cardKey = key;
      const info = node("div", "deck-card-info");
      const controls = node("div", "deck-card-controls");
      const remove = node("button", "button secondary deck-remove", "\u2212");
      const count = node("span", "deck-count");
      const add = node("button", "button secondary deck-add", "+");
      remove.type = add.type = "button";
      remove.addEventListener("click", () => {
        const index = draftDeck.indexOf(card);
        if (index < 0) throw new Error("Cannot remove a card that is not in the deck.");
        draftDeck.splice(index, 1);
        $("deck-load").value = "custom";
        updateDeckEditor();
      });
      add.addEventListener("click", () => {
        if (deckRank(draftDeck) + card.rank > DECK_RANK_LIMIT) {
          throw new Error("A deck cannot exceed 24 total ranks.");
        }
        draftDeck.push(card);
        $("deck-load").value = "custom";
        updateDeckEditor();
      });
      controls.append(remove, count, add);
      info.append(node("h3", null, card.name), node("p", null, `Rank ${card.rank} \xB7 ${card.colors.join(" / ")}`), node("p", null, card.attributeText), controls);
      tile.append(artwork(card), info);
      container.append(tile);
    }
  }
  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== void 0) element.textContent = text;
    return element;
  }
  function describeSlot(slot) {
    return `${slot < 4 ? "frontline" : "backline"} ${slot % 4 + 1}`;
  }
  function artwork(card) {
    const visual = node("span", "card-visual");
    const image = node("img", "card-art");
    image.src = card.image;
    image.alt = "";
    image.draggable = false;
    const rank = node("img", "card-rank");
    rank.src = `Cards online/rank${card.rank}.png`;
    rank.alt = "";
    rank.draggable = false;
    rank.setAttribute("aria-hidden", "true");
    visual.append(image, rank);
    return visual;
  }
  function selectedActions() {
    const actions = getLegalActions(game);
    if (selection?.kind === "hand") {
      return actions.filter((action) => action.cardId === selection.cardId);
    }
    if (selection?.kind === "rune") {
      return actions.filter((action) => action.type === "move" && action.from === selection.slot || (action.type === "attack" || action.type === "attribute") && action.slot === selection.slot);
    }
    return [];
  }
  function addHistory(entry) {
    const scroll = $("history-scroll");
    const atBottom = scroll.scrollHeight - scroll.clientHeight - scroll.scrollTop < 24;
    const item = node("li", "history-entry");
    item.append(node("div", "history-turn", `TURN ${entry.turn}`), node("div", null, entry.summary));
    if (entry.details.length) {
      const details = node("ul", "history-details");
      for (const detail of entry.details) details.append(node("li", null, detail));
      item.append(details);
    }
    $("action-history").append(item);
    $("history-empty").hidden = true;
    if (atBottom) scroll.scrollTop = scroll.scrollHeight;
  }
  function perform(action, aiAttempt = null, placementSide = null) {
    const previous = game;
    const pendingDeflection = ["acceptAttack", "deflectAttack"].includes(action.type) ? game.pendingDeflection : null;
    const combatSource = action.type === "attack" ? game.players[game.currentPlayer].slots[action.slot] : pendingDeflection ? game.players[pendingDeflection.attackerPlayer].slots[pendingDeflection.slot] : null;
    const combatTarget = action.type === "attack" ? game.players[1 - game.currentPlayer].slots[action.target] : pendingDeflection ? game.players[pendingDeflection.player].slots[pendingDeflection.target] : null;
    const executionAttack = combatSource && combatTarget && getRuneAttribute(combatSource) === "execution" && combatTarget.damage > 0 && getRuneAttribute(combatTarget) !== "intangible";
    const attribute = action.type === "attribute" ? getRuneAttribute(game.players[game.currentPlayer].slots[action.slot]) : null;
    const sourceName = action.type === "attribute" ? game.players[game.currentPlayer].slots[action.slot].stack.at(-1).name : null;
    const focusRune = action.type === "chooseFocus" ? game.players[game.currentPlayer].slots[action.slot] : null;
    const focusId = focusRune?.stack[0].id;
    const focusChoice = focusRune && action.sourceSlot !== null ? game.players[game.currentPlayer].slots[action.sourceSlot].stack.at(-1).name : null;
    const incomingFocusIds = action.type === "endTurn" ? game.players[1 - game.currentPlayer].slots.filter((rune) => rune?.stack.at(-1).attribute === "focus").map((rune) => rune.stack[0].id) : [];
    const immuneTarget = action.type === "attribute" && attribute !== "mending" && attribute !== "amplifying" && attribute !== "soulbind" && attribute !== "infusion" && attribute !== "command" && [...action.targetSlots ?? [], ...action.targetSlot === void 0 ? [] : [action.targetSlot]].some((slot) => getRuneAttribute(game.players[action.targetPlayer].slots[slot]) === "intangible");
    const actualRolls = aiAttempt?.actualRolls ?? [];
    game = aiLog ? applyLoggedAction(game, action, actualRolls) : applyAction(game, action);
    const frontlineDestination = action.type === "play" ? action.slot : action.type === "move" ? action.to : null;
    if (frontlineDestination !== null && frontlineDestination < 4 && !previous.players[previous.currentPlayer].slots[frontlineDestination]) {
      const player = previous.currentPlayer;
      visualColumnOrder[player] = getFrontlinePlacementOrder(previous.players[player].slots, visualColumnOrder[player], frontlineDestination, placementSide);
    }
    if (aiAttempt) aiAttempt.actionApplied = true;
    if (aiAttempt && learningMatch) recordLearningDecision(learningMatch.episode, aiAttempt.decision);
    const deflected = game.lastDeflections.some((roll) => roll.success);
    selection = null;
    targetPreview = null;
    inspected = null;
    if (game.winner !== null) {
      const roll = game.lastRoll ? `${game.lastRoll.card} rolled ${game.lastRoll.value}. ` : "";
      const immunity = immuneTarget && (!game.lastRoll || game.lastRoll.success) ? "Intangible is immune to the damage. " : "";
      message = `${roll}${immunity}${game.winner === "draw" ? `${drawDescription(game.drawReason)} The round is a draw.` : `${gameMode === "ai" && game.winner === 1 ? "AI" : `Player ${game.winner + 1}`} wins!`}`;
    } else if (action.type === "attack" && game.pendingDeflection) {
      handoff = gameMode === "local";
      handoffAfterDraw = false;
      const defender = gameMode === "ai" && game.currentPlayer === 1 ? "The AI" : `Player ${game.currentPlayer + 1}`;
      handoffPrompt = handoff ? `Player ${previous.currentPlayer + 1} attacked. Pass the device to ${defender} to choose a defense.` : null;
      message = `${defender} must choose whether to take the normal attack or deflect it.`;
    } else if (action.type === "acceptAttack" || action.type === "deflectAttack") {
      handoff = gameMode === "local";
      handoffAfterDraw = false;
      const defender = gameMode === "ai" && pendingDeflection.player === 1 ? "The AI" : `Player ${pendingDeflection.player + 1}`;
      handoffPrompt = handoff ? `Player ${previous.currentPlayer + 1} chose to ${action.type === "deflectAttack" ? "deflect" : "take the normal attack"}. Pass the device back to Player ${game.currentPlayer + 1}.` : null;
      message = action.type === "deflectAttack" ? `${defender} chose to deflect.` : `${defender} chose to take the normal attack.`;
      if (executionAttack) {
        message += action.type === "deflectAttack" ? deflected ? " Execution was stopped by the successful deflection." : " The deflection failed to stop Execution; the target was destroyed." : " Execution destroyed the wounded target without retaliation.";
      }
    } else if (action.type === "endTurn") {
      handoff = gameMode === "local";
      handoffAfterDraw = false;
      handoffPrompt = null;
      message = isAiTurn() ? "The AI is choosing its next action." : "Select a card or rune to see its available actions.";
    } else if (action.type === "offerDraw") {
      message = "Draw offered; awaiting the opponent's response.";
    } else if (action.type === "declineDraw") {
      message = gameMode === "ai" ? "The AI declined the draw. Continue your turn." : "Draw declined. Continue your turn.";
    } else if (action.type === "chooseFocus") {
      const survives = game.players[game.currentPlayer].slots.some((rune) => rune?.stack[0].id === focusId);
      message = `Focus chose ${focusChoice ?? "no attribute"}.${survives ? "" : " The loss of health destroyed it."}`;
    } else if (action.type === "attribute") {
      if (attribute === "mending") {
        message = "Mending restored 1 hit point.";
      } else if (attribute === "transpose") {
        const [firstSlot, secondSlot] = action.targetSlots;
        const first = previous.players[action.targetPlayer].slots[firstSlot];
        const second = previous.players[action.targetPlayer].slots[secondSlot];
        message = `${sourceName} swapped ${first.stack.at(-1).name} (${describeSlot(firstSlot)}) and ${second.stack.at(-1).name} (${describeSlot(secondSlot)}) using Transpose.`;
      } else if (attribute === "amplifying") {
        message = "Amplifying gave the friendly rune +1 attack until the effect ends.";
      } else if (attribute === "soulbind") {
        const target = previous.players[action.targetPlayer].slots[action.targetSlot];
        message = `${sourceName} linked to ${target.stack.at(-1).name}; it takes HP loss for that rune until its next turn.`;
      } else if (attribute === "infusion") {
        const target = previous.players[action.targetPlayer].slots[action.targetSlot];
        message = `${sourceName} gave ${target.stack.at(-1).name} +2 attack until the start of its owner's next turn, paying 1 HP.`;
      } else if (attribute === "command") {
        const target = previous.players[action.targetPlayer].slots[action.targetSlot];
        message = `Command refreshed ${target.stack.at(-1).name}'s action. It may attack, use an attribute, or upgrade; it cannot move again.`;
      } else if (attribute === "spectral") {
        message = immuneTarget ? "Intangible is immune to Spectral." : "Spectral disabled the target until the effect ends.";
      } else if (attribute === "snare") {
        message = "Snare prevents the target from moving or swapping during its next turn.";
      } else if (attribute === "martyr") {
        message = `${sourceName} sacrificed itself to refresh the friendly rune's action.`;
      } else if (attribute === "recall") {
        const target = previous.players[action.targetPlayer].slots[action.targetSlot];
        message = `All cards in ${target.stack.at(-1).name}'s stack returned to your hand.`;
      } else if (attribute === "bolt") {
        message = `${sourceName} traded ${action.targetSlots.length} hit point${action.targetSlots.length === 1 ? "" : "s"}. Check each target's remaining health.`;
      } else if (attribute === "masterful") {
        message = `Masterful traded ${action.targetSlots.length} hit point${action.targetSlots.length === 1 ? "" : "s"}.${immuneTarget ? " Intangible is immune to the damage." : ""}`;
      } else if (attribute === "fire") {
        message = immuneTarget ? `Intangible is immune to the damage. ${sourceName} was destroyed.` : deflected ? `Fire's damage was negated. ${sourceName} was destroyed.` : `Fire dealt 2 damage and ${sourceName} was destroyed.`;
      } else if (attribute === "acid") {
        message = deflected ? `Acid resolved and ${sourceName} was destroyed.${immuneTarget ? " Intangible is immune." : ""}` : immuneTarget ? `Acid dealt 1 damage to each target except Intangible, then ${sourceName} was destroyed.` : `Acid dealt 1 damage to each target, then ${sourceName} was destroyed.`;
      } else if (attribute === "fire-ball") {
        message = immuneTarget || deflected ? `Fire Ball resolved and ${sourceName} was destroyed.${immuneTarget ? " Intangible is immune to its damage." : ""}` : `Fire Ball dealt 2 damage to its main target and 1 to each other enemy, then ${sourceName} was destroyed.`;
      } else if (attribute === "magma") {
        const result2 = !game.lastRoll.success ? "no damage dealt." : immuneTarget ? "Intangible is immune to the damage." : deflected ? "damage was negated." : "2 damage dealt.";
        message = `${sourceName} rolled ${game.lastRoll.value}: ${result2}`;
      } else if (attribute === "soul") {
        const result2 = !game.lastRoll.success ? "no effect." : immuneTarget ? `Intangible is immune; ${sourceName} gained 1 hit point.` : deflected ? `damage was negated; ${sourceName} gained 1 hit point.` : `1 damage dealt; ${sourceName} gained 1 hit point.`;
        message = `${sourceName} rolled ${game.lastRoll.value}: ${result2}`;
      } else {
        throw new Error(`Unsupported active attribute: ${attribute}`);
      }
    } else {
      const descriptions = {
        play: ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE && previous.turn === 2 ? "Rune played. On this first turn, the second player may upgrade newly played runes." : "Rune played. Newly played runes cannot act this turn.",
        move: "Movement complete.",
        upgrade: "Rune upgraded.",
        attack: "Attack resolved. Check each rune's remaining health."
      };
      message = action.type === "attack" && executionAttack ? "Execution destroyed the wounded target without retaliation." : descriptions[action.type];
    }
    const lostFocus = incomingFocusIds.filter((id) => !game.players[game.currentPlayer].slots.some((rune) => rune?.stack[0].id === id)).length;
    if (lostFocus) {
      message += ` ${lostFocus === 1 ? "A Focus was" : `${lostFocus} Focus runes were`} destroyed at the start of the turn after losing a copied health bonus.`;
    }
    if (game.lastDeflections.length) {
      message += " " + game.lastDeflections.map((roll) => {
        const executionRoll = executionAttack && pendingDeflection && roll.targetPlayer === pendingDeflection.player && roll.targetSlot === pendingDeflection.target;
        const outcome = executionRoll ? roll.success ? `Execution prevented, ${roll.returned} returned` : "Execution not prevented" : roll.success ? `damage negated, ${roll.returned} returned` : "damage not negated";
        return `${roll.card} (Player ${roll.targetPlayer + 1}, ${describeSlot(roll.targetSlot)}) rolled ${roll.value}: ${outcome}.`;
      }).join(" ");
    }
    if (game.lastNecroticRolls.length) {
      message += " " + game.lastNecroticRolls.map((roll) => `Player ${roll.player + 1}'s Necrotic (${describeSlot(roll.slot)}) rolled ${roll.value} for ${roll.destroyed}: ${roll.success ? "Haunting added to hand" : "no Haunting added"}.`).join(" ");
    }
    if (game.lastPhoenixRolls.length) {
      message += " " + game.lastPhoenixRolls.map((roll) => `Player ${roll.player + 1}'s ${roll.card} (${describeSlot(roll.slot)}) rolled ${roll.value}: ${roll.success ? "returned to hand" : "destroyed"}.`).join(" ");
    }
    if (game.lastSplinterTriggers.length) {
      message += " " + game.lastSplinterTriggers.map((player) => `Player ${player + 1}'s Splinter triggered.`).join(" ");
    }
    if (game.lastLeechHeals.length) {
      message += " " + game.lastLeechHeals.map((heal) => `Player ${heal.player + 1}'s ${heal.card} (${describeSlot(heal.slot)}) restored 1 HP with Leech.`).join(" ");
    }
    const result = game;
    const resultMessage = message;
    const resultHandoff = handoff;
    const resultHandoffAfterDraw = handoffAfterDraw;
    const entry = describeAction(previous, result, action, gameMode === "ai");
    const dice = createDiceFeedback(previous, result, gameMode === "ai");
    const beforeDice = dice.filter((cue) => cue.phase === "before-action");
    const necroticDice = dice.filter((cue) => cue.phase === "after-destruction");
    const recordResult = () => {
      if (aiLog) {
        recordAiLogAction(aiLog, previous, action, game, actualRolls, entry, aiAttempt?.decision ?? null);
        if (aiAttempt) aiAttempt.actionRecorded = true;
      }
      addHistory(entry);
      finishLearningMatch();
    };
    handoff = resultHandoff;
    handoffAfterDraw = resultHandoffAfterDraw;
    message = resultMessage;
    showDamageFeedback(previous, result, action);
    animateBoardAction(previous, result, action, () => {
      render();
      showVictory();
      scheduleAiTurn();
    });
    recordResult();
    render();
    if (action.type === "endTurn" && game.winner === null && !handoff) highlightTurn();
    flashActionSlots(previous, action);
    if (game.winner !== null) victoryPending = true;
    queueDiceFeedback([...beforeDice, ...necroticDice]);
    scheduleAiTurn();
  }
  function chooseHand(card, dragging = false) {
    selection = { kind: "hand", cardId: card.id };
    targetPreview = null;
    inspected = { card };
    const options = selectedActions();
    message = options.length ? `Choose a glowing position to ${card.rank === 1 ? "play or upgrade with" : "upgrade with"} ${card.name}.` : `${card.name} has no legal play or upgrade right now.`;
    render(dragging);
    if (dragging) {
      for (const button of $("hand").querySelectorAll(".hand-card")) {
        button.classList.toggle("selected", button.dataset.cardId === card.id);
      }
    } else {
      $("hand").querySelector(".hand-card.selected").focus({ preventScroll: true });
    }
  }
  function chooseSlot(playerIndex, slot, placementSide = "left") {
    const isMine = playerIndex === game.currentPlayer;
    const rune = game.players[playerIndex].slots[slot];
    const options = selectedActions();
    let action;
    if (selection?.kind === "hand" && isMine) {
      action = options.find((item) => (item.type === "play" || item.type === "upgrade") && item.slot === slot);
    } else if (selection?.kind === "rune") {
      if (selection.mode === "move" && isMine) {
        action = options.find((item) => item.type === "move" && item.to === slot);
      } else if (selection.mode === "attack" && !isMine) {
        action = options.find((item) => item.type === "attack" && item.target === slot);
      } else if (selection.mode === "attribute") {
        const attribute = getRuneAttribute(game.players[game.currentPlayer].slots[selection.slot]);
        if ((attribute === "masterful" || attribute === "bolt") && !isMine && rune && isActionTarget(selection, options, game.currentPlayer, playerIndex, slot)) {
          const amount = selection.tradeAmount;
          selection.targetSlots.push(slot);
          if (selection.targetSlots.length === amount) {
            perform({ type: "attribute", slot: selection.slot, targetPlayer: playerIndex, targetSlots: selection.targetSlots });
            return;
          }
          message = `Choose an enemy once per damage point (${selection.targetSlots.length}/${amount}); repeat a target to assign more.`;
          render();
          return;
        }
        const acidOptions = attribute === "acid" ? options.filter((item) => item.type === "attribute" && item.targetSlots && item.targetSlot === void 0 && item.targetPlayer === playerIndex) : [];
        if (acidOptions.some((item) => item.targetSlots.includes(slot))) {
          const selected = selection.targetSlots;
          if (selected.includes(slot)) {
            selection.targetSlots = selected.filter((target) => target !== slot);
          } else {
            selection.targetSlots = [...selected, slot];
          }
          action = acidOptions.find((item) => item.targetSlots.length === selection.targetSlots.length && item.targetSlots.every((target) => selection.targetSlots.includes(target)));
          if (action) {
            perform(action);
          } else {
            const count = acidOptions[0].targetSlots.length;
            message = `Choose ${count} different enemy rune${count === 1 ? "" : "s"} for Acid (${selection.targetSlots.length}/${count}). Select again to undo.`;
            render();
          }
          return;
        }
        const transposeOptions = attribute === "transpose" ? options.filter((item) => item.type === "attribute" && item.targetSlots && item.targetPlayer === playerIndex) : [];
        if (transposeOptions.some((item) => item.targetSlots.includes(slot)) && !isMine && rune) {
          const selected = selection.targetSlots;
          if (selected.includes(slot)) {
            selection.targetSlots = [];
            message = "Choose two opposing runes to swap. Both positions must be legal.";
          } else if (selected.length === 0) {
            selection.targetSlots = [slot];
            message = "Choose a second opposing rune to swap (1/2). Select the first again to undo.";
          } else {
            action = transposeOptions.find((item) => item.targetSlots.includes(selected[0]) && item.targetSlots.includes(slot));
            if (action) {
              perform(action);
              return;
            }
            selection.targetSlots = [slot];
            message = "Those runes cannot swap legally. Choose another second rune, or select this rune again to undo.";
          }
          render();
          return;
        }
        action = options.find((item) => item.type === "attribute" && item.targetPlayer === playerIndex && item.targetSlot === slot);
      }
    }
    if (action) {
      perform(action, null, placementSide);
      return;
    }
    if (selection?.kind === "rune" && selection.mode === "attribute" && rune && !isActionTarget(selection, options, game.currentPlayer, playerIndex, slot)) {
      message = "That rune is not a valid target for this attribute.";
      render();
      return;
    }
    targetPreview = null;
    if (rune) {
      const card = rune.stack[rune.stack.length - 1];
      inspected = { card, rune, playerIndex };
      selection = isMine ? { kind: "rune", slot, mode: null } : null;
      message = isMine ? `Selected ${card.name}. Choose an available action or select a card to upgrade it.` : `Inspecting opponent's ${card.name}.`;
    } else {
      message = "That position isn't available for the selected action.";
    }
    render();
    if (rune && isMine && selection?.kind === "rune" && selection.mode === null) $("wheel-cancel").focus();
  }
  function positionActionWheel() {
    const wheel = $("action-wheel");
    if (wheel.hidden || selection?.kind !== "rune" || selection.mode !== null) return;
    const board = $("rune-board").getBoundingClientRect();
    const image = document.querySelector(`.slot[data-player="${game.currentPlayer}"][data-slot="${selection.slot}"] .card-art`);
    const rect = image.getBoundingClientRect();
    wheel.style.left = `${rect.left + rect.width / 2 - board.left}px`;
    wheel.style.top = `${rect.top + rect.height / 2 - board.top}px`;
  }
  function renderActionWheel(options) {
    const wheel = $("action-wheel");
    wheel.hidden = selection?.kind !== "rune" || selection.mode !== null || handoff || isAiTurn() || game.winner !== null;
    if (wheel.hidden) return;
    const rune = game.players[game.currentPlayer].slots[selection.slot];
    wheel.setAttribute("aria-label", `Actions for ${rune.stack.at(-1).name}`);
    for (const type of ["move", "attack", "attribute"]) {
      $(`wheel-${type}`).disabled = !options.some((action) => action.type === type);
    }
    positionActionWheel();
  }
  function effectDescriptions(links, playerIndex, slot) {
    return links.flatMap((link) => {
      const isSource = link.sourcePlayer === playerIndex && link.sourceSlot === slot;
      const isTarget = link.targetPlayer === playerIndex && link.targetSlot === slot;
      if (!isSource && !isTarget) return [];
      const owner = isSource ? link.targetPlayer : link.sourcePlayer;
      const position = isSource ? link.targetSlot : link.sourceSlot;
      const rune = game.players[owner].slots[position];
      const name = gameMode === "ai" && owner === 1 ? "AI" : `Player ${owner + 1}`;
      const verb = link.type === "spectral" ? isSource ? "Disables" : "Disabled by" : link.type === "soulbind" ? isSource ? "Protects" : "Protected by" : isSource ? "Amplifies" : "Amplified by";
      return [`${verb} ${name}'s ${rune.stack.at(-1).name} at ${describeSlot(position)}`];
    });
  }
  function renderEffectLinks(links = getEffectLinks(game)) {
    const svg = $("effect-links");
    svg.replaceChildren();
    svg.hidden = false;
    const board = $("rune-board").getBoundingClientRect();
    if (!board.width || !board.height) return;
    svg.setAttribute("viewBox", `0 0 ${board.width} ${board.height}`);
    const makeSvg = (tag, attributes) => {
      const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (const [name, value2] of Object.entries(attributes)) element.setAttribute(name, String(value2));
      return element;
    };
    const artworkBounds = (player, slot) => {
      const image = document.querySelector(`.slot[data-player="${player}"][data-slot="${slot}"] .card-art`);
      const rect = image.getBoundingClientRect();
      const style = getComputedStyle(image);
      const width = rect.width - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const height = rect.height - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      const scale = image.naturalWidth && image.naturalHeight ? Math.min(width / image.naturalWidth, height / image.naturalHeight) : 0;
      const artWidth = scale ? image.naturalWidth * scale : width;
      const artHeight = scale ? image.naturalHeight * scale : height;
      return { left: rect.left + (rect.width - artWidth) / 2, top: rect.top + (rect.height - artHeight) / 2, width: artWidth, height: artHeight };
    };
    const previews = getTargetLinks(selection, selectedActions(), game.currentPlayer, targetPreview);
    const pendingAttack = game.pendingDeflection ? [{
      sourcePlayer: game.pendingDeflection.attackerPlayer,
      sourceSlot: game.pendingDeflection.slot,
      targetPlayer: game.pendingDeflection.player,
      targetSlot: game.pendingDeflection.target,
      type: "target-attack"
    }] : [];
    const activeFocusLinks = getFocusCopyLinks(game);
    const focusPreview = focusTargetPreview ? [{
      sourcePlayer: focusTargetPreview.player,
      sourceSlot: focusTargetPreview.focusSlot,
      targetPlayer: focusTargetPreview.player,
      targetSlot: focusTargetPreview.sourceSlot,
      type: "focus-preview"
    }].filter((preview) => !activeFocusLinks.some((link) => link.sourcePlayer === preview.sourcePlayer && link.sourceSlot === preview.sourceSlot && link.targetPlayer === preview.targetPlayer && link.targetSlot === preview.targetSlot)) : [];
    for (const link of [...links, ...activeFocusLinks, ...previews, ...focusPreview, ...pendingAttack]) {
      const source = artworkBounds(link.sourcePlayer, link.sourceSlot);
      const target = artworkBounds(link.targetPlayer, link.targetSlot);
      const sx = source.left + source.width / 2 - board.left;
      const sy = source.top + source.height / 2 - board.top;
      const tx = target.left + target.width / 2 - board.left;
      const ty = target.top + target.height / 2 - board.top;
      const length = Math.hypot(tx - sx, ty - sy);
      if (!length) continue;
      const ux = (tx - sx) / length;
      const uy = (ty - sy) / length;
      const edge = (rect) => Math.min(
        ux ? rect.width / 2 / Math.abs(ux) : Infinity,
        uy ? rect.height / 2 / Math.abs(uy) : Infinity
      );
      const start = edge(source);
      const end = edge(target);
      const x1 = sx + ux * start;
      const y1 = sy + uy * start;
      const x2 = tx - ux * end;
      const y2 = ty - uy * end;
      svg.append(
        makeSvg("line", { class: `effect-link ${link.type}`, x1, y1, x2, y2 }),
        makeSvg("polygon", {
          class: `effect-arrow ${link.type}`,
          points: `${x2},${y2} ${x2 - ux * 9 - uy * 4},${y2 - uy * 9 + ux * 4} ${x2 - ux * 9 + uy * 4},${y2 - uy * 9 - ux * 4}`
        })
      );
    }
  }
  function setFocusTargetPreview(focusSlot, sourceSlot) {
    const next = sourceSlot === null ? null : { player: game.currentPlayer, focusSlot, sourceSlot };
    if (focusTargetPreview?.player === next?.player && focusTargetPreview?.focusSlot === next?.focusSlot && focusTargetPreview?.sourceSlot === next?.sourceSlot) return;
    document.querySelectorAll(".slot.focus-target-preview").forEach((slot) => slot.classList.remove("focus-target-preview"));
    focusTargetPreview = next;
    if (next) {
      document.querySelector(`.slot[data-player="${next.player}"][data-slot="${next.sourceSlot}"]`)?.classList.add("focus-target-preview");
    }
    renderEffectLinks();
  }
  function renderRow(id, playerIndex, start, links, preservedRune) {
    const row = $(id);
    const preserved = preservedRune && row.contains(preservedRune) ? preservedRune : null;
    if (preserved) {
      for (const child of [...row.children]) {
        if (child !== preserved) child.remove();
      }
    } else {
      row.replaceChildren();
    }
    const isMine = playerIndex === viewPlayer();
    const options = selectedActions();
    const slots = boardAnimation?.visualSlots[playerIndex] ?? game.players[playerIndex].slots;
    const layoutSlots = boardAnimation?.layoutSlots[playerIndex] ?? game.players[playerIndex].slots;
    for (const column of getBattlefieldColumns(layoutSlots, visualColumnOrder[playerIndex])) {
      const slot = start + column.column;
      const rune = slots[slot];
      const focusTarget = focusTargetPreview?.player === playerIndex && focusTargetPreview.sourceSlot === slot;
      if (preserved && Number(preserved.dataset.slot) === slot) {
        preserved.classList.add("selected");
        preserved.classList.toggle("focus-target-preview", focusTarget);
        continue;
      }
      const disabled = isRuneDisabled(game, playerIndex, slot);
      const button = node("button", "slot");
      button.type = "button";
      button.dataset.player = String(playerIndex);
      button.dataset.slot = String(slot);
      if (rune) button.dataset.runeId = String(rune.stack[0].id);
      button.style.gridColumn = `${column.start} / span ${column.span}`;
      if (["death", "burst"].includes(boardAnimation?.stage) && boardAnimation.destroyedSlots.has(`${playerIndex}:${slot}`)) {
        button.classList.add("animation-origin");
      }
      const selectedTarget = !isMine && selection?.mode === "attribute" && selection.targetSlots?.includes(slot);
      const attribute = selection?.kind === "rune" && selection.mode === "attribute" ? getRuneAttribute(game.players[game.currentPlayer].slots[selection.slot]) : null;
      const targetCount = (attribute === "masterful" || attribute === "bolt") && selectedTarget ? selection.targetSlots.filter((target) => target === slot).length : 0;
      const transposeTarget = attribute === "transpose" && selectedTarget;
      const upgradeAvailable = Boolean(rune?.acted && isMine && playerIndex === game.currentPlayer && ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE && game.turn === 2 && getLegalActions(game).some((action) => action.type === "upgrade" && action.slot === slot));
      const frenzyAttacks = rune && getRuneAttribute(rune) === "frenzy" ? rune.attacksUsed ?? 0 : null;
      const availability = rune && isMine && !disabled && !rune.stunned ? `, movement ${rune.snared ? "blocked by Snare" : rune.moved ? "used" : "available"}, ${upgradeAvailable ? "upgrade available" : `action ${rune.acted ? "used" : "available"}`}` : rune ? `, ${rune.acted ? "acted" : "not acted"} this turn` : "";
      const frenzyAvailability = frenzyAttacks === null ? "" : `, attacks ${frenzyAttacks}/2 used${rune.commandedActionAvailable && frenzyAttacks >= 2 ? ", Command allows another attack" : ""}`;
      const effects = effectDescriptions(links, playerIndex, slot);
      button.setAttribute("aria-label", `${isMine ? "Your" : "Opponent"} ${describeSlot(slot)}${rune ? `: ${rune.stack.at(-1).name}` : ": empty"}${rune?.haunted ? ", haunted" : ""}${rune?.amplification ? `, +${rune.amplification} attack` : ""}${rune?.infusionAttackBonus ? `, +${rune.infusionAttackBonus} attack from Infusion` : ""}${rune?.commandedActionAvailable ? ", Command-granted action available" : ""}${disabled ? ", disabled" : ""}${rune?.stunned ? ", skips turn" : ""}${availability}${frenzyAvailability}${selectedTarget ? `, selected target${targetCount ? `, ${targetCount} damage` : ""}` : ""}${focusTarget ? ", Focus copy source" : ""}${effects.length ? `, ${effects.join(", ")}` : ""}`);
      const draggingAttack = Boolean(draggedRune && selection?.kind === "rune" && selection.mode === "attack" && selection.slot === draggedRune.slot && draggedRune.player === game.currentPlayer);
      const legal = selection?.kind === "hand" && isMine ? options.some((action) => (action.type === "play" || action.type === "upgrade") && action.slot === slot) : selection?.kind === "rune" && (selection.mode === "move" && isMine && options.some((action) => action.type === "move" && action.to === slot) || draggingAttack && isMine && options.some((action) => action.type === "move" && action.from === selection.slot && action.to === slot) || isActionTarget(selection, options, game.currentPlayer, playerIndex, slot));
      const attackPreview = legal && selection?.mode === "attack" && !isMine ? getAttackDamage(game, selection.slot, slot) : null;
      const attributePreview = legal && selection?.mode === "attribute" ? getAttributeDamagePreview(game, selection.slot, playerIndex, slot, selection.targetSlots) : null;
      const damagePreview = attackPreview ?? attributePreview;
      const previewOutcomes = [
        ...attackPreview?.lightningDisableTarget ? [`Lightning disables this rune${attackPreview.deflectable ? " unless Deflecting succeeds" : ""}.`] : [],
        ...attackPreview?.lightningDisableAttacker ? ["Defending Lightning disables the attacker after combat."] : [],
        ...damagePreview?.soulbindDamageRedirected ? ["Soulbind takes any HP loss this rune would otherwise take."] : []
      ];
      if (damagePreview) {
        const amount = attributePreview?.variable ? `0-${damagePreview.damage}` : damagePreview.deflectable ? `UP TO ${damagePreview.damage}` : String(damagePreview.damage);
        if (attackPreview?.execution) {
          const outcome = attackPreview.deflectable ? "Execution destroys unless deflected" : "Execution destroys without retaliation";
          button.setAttribute("aria-label", `${button.getAttribute("aria-label")}, ${outcome}`);
        } else {
          button.setAttribute("aria-label", `${button.getAttribute("aria-label")}, ${amount} damage`);
        }
        if (previewOutcomes.length) {
          button.setAttribute("aria-label", `${button.getAttribute("aria-label")}, ${previewOutcomes.join(" ")}`);
        }
      }
      const showEmpty = isMine && (selection?.kind === "rune" && (selection.mode === "move" || draggingAttack) && legal || selection?.kind === "hand" && legal);
      if (!rune && !showEmpty) {
        button.classList.add("slot-hidden");
        button.setAttribute("aria-hidden", "true");
        button.tabIndex = -1;
      }
      if (legal) button.classList.add("legal");
      if (legal && (selection?.mode === "attack" && !isMine || selection?.mode === "attribute")) {
        button.setAttribute("aria-label", `${button.getAttribute("aria-label")}, valid ${selection.mode} target`);
      }
      if (selectedTarget || isMine && selection?.kind === "rune" && selection.slot === slot) button.classList.add("selected");
      if (focusTarget) button.classList.add("focus-target-preview");
      if (rune) {
        button.classList.add("occupied");
        const card = rune.stack[rune.stack.length - 1];
        const runeActions = getLegalActions(game).filter((action) => action.type === "move" ? action.from === slot : action.type === "attack" && action.slot === slot);
        if (isMine && playerIndex === game.currentPlayer && !isAiTurn() && runeActions.length) {
          button.draggable = true;
          button.addEventListener("dragstart", (event) => {
            setDragHoverTarget(null);
            setDragImage(event, button);
            draggedRune = { player: playerIndex, slot };
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", card.name);
            const canAttack = runeActions.some((action) => action.type === "attack");
            const canMove = runeActions.some((action) => action.type === "move");
            selection = { kind: "rune", slot, mode: canAttack ? "attack" : "move" };
            targetPreview = null;
            inspected = { card, rune, playerIndex };
            message = canAttack ? `Drop on a glowing enemy rune to attack${canMove ? ", or a glowing friendly position to move or swap" : ""}.` : "Drop on a glowing friendly position to move or swap.";
            render(false, button);
          });
          button.addEventListener("dragend", () => {
            if (draggedRune?.player !== playerIndex || draggedRune.slot !== slot) return;
            draggedRune = null;
            setDragHoverTarget(null);
            cancelSelection();
          });
        }
        const stats = getRuneStats(rune, game.players[playerIndex]);
        const image = artwork(card);
        const primaryParticleColor = RUNE_PARTICLE_COLORS[card.colors[0]] ?? RUNE_PARTICLE_COLORS.grey;
        const secondaryParticleColor = RUNE_PARTICLE_COLORS[card.colors[1] ?? card.colors[0]] ?? RUNE_PARTICLE_COLORS.grey;
        image.style.setProperty("--rune-color-primary", primaryParticleColor.color);
        image.style.setProperty("--rune-glow-primary", primaryParticleColor.glow);
        image.style.setProperty("--rune-color-secondary", secondaryParticleColor.color);
        image.style.setProperty("--rune-glow-secondary", secondaryParticleColor.glow);
        const particles = node("span", "rune-particles");
        particles.setAttribute("aria-hidden", "true");
        particles.dataset.player = String(playerIndex);
        particles.dataset.runeId = String(rune.stack[0].id);
        const particleTime = performance.now() / 1e3;
        const particleOffsets = [0.3, 1.2, 2, 0.8];
        for (let particle = 0; particle < 4; particle++) {
          const spark = node("span", "rune-particle");
          const phase = (particleTime + particleOffsets[particle]) % 2.8;
          const directionKey = `${playerIndex}:${rune.stack[0].id}:idle:${particle}`;
          restoreRuneParticleDirection(spark, directionKey);
          spark.style.animationDelay = `-${phase}s`;
          spark.addEventListener("animationiteration", () => randomizeRuneParticleDirection(spark));
          particles.append(spark);
        }
        const excitement = excitedRunes.get(`${playerIndex}:${rune.stack[0].id}`);
        if (excitement?.cooling) {
          particles.classList.add("cooling");
          addExcitedParticles(particles, excitement.remainingExcitedParticles);
        } else if (excitement?.expiresAt > performance.now()) {
          addExcitedParticles(particles);
        }
        image.append(particles);
        const cardImage = image.querySelector(".card-art");
        cardImage.addEventListener("load", () => {
          if (cardImage.isConnected) renderEffectLinks();
        });
        const statusEffects = node("span", "slot-effects");
        if (targetCount) statusEffects.append(node("span", "target-count", `${targetCount} DMG`));
        else if (transposeTarget) statusEffects.append(node("span", "target-count", "SWAP 1/2"));
        if (damagePreview) {
          const amount = attributePreview?.variable ? `0-${damagePreview.damage}` : damagePreview.deflectable ? `UP TO ${damagePreview.damage}` : String(damagePreview.damage);
          const preview = node(
            "span",
            "target-count target-damage",
            attackPreview?.execution ? attackPreview.deflectable ? "EXEC*" : "EXEC" : `${amount} DMG`
          );
          if (attackPreview?.execution) {
            preview.title = attackPreview.deflectable ? "Execution destroys this wounded target unless Deflecting succeeds." : "Execution destroys this wounded target without retaliation.";
          }
          statusEffects.append(preview);
        }
        if (rune.haunted) statusEffects.append(node("span", "haunted", "HAUNTED"));
        if (rune.amplification) statusEffects.append(node("span", "haunted", `+${rune.amplification} ATK`));
        if (rune.infusionAttackBonus) statusEffects.append(node("span", "haunted", `+${rune.infusionAttackBonus} INFUSED`));
        if (rune.commandedActionAvailable) statusEffects.append(node("span", "haunted", "COMMAND ACTION"));
        if (disabled) statusEffects.append(node("span", "stunned", "DISABLED"));
        if (rune.stunned) statusEffects.append(node("span", "stunned", "SKIPS TURN"));
        if (rune.snared) statusEffects.append(node("span", "stunned", "SNARED"));
        const meta = node("span", "slot-meta");
        meta.append(node("span", "health", `\u2665 ${stats.health}/${stats.maxHealth}`));
        const status = node("span", "availability");
        status.setAttribute("aria-hidden", "true");
        if (isMine && !disabled && !rune.stunned) {
          status.append(
            node(
              "span",
              rune.moved || rune.snared ? "availability-used" : "availability-ready",
              rune.snared ? "MOVE \u2715" : `MOVE ${rune.moved ? "\u2713" : "\u25CB"}`
            ),
            node(
              "span",
              rune.acted && !upgradeAvailable ? "availability-used" : "availability-ready",
              upgradeAvailable ? "UPGRADE \u25CB" : `ACTION ${rune.acted ? "\u2713" : "\u25CB"}`
            )
          );
        } else {
          const acted = node(
            "span",
            rune.acted ? "availability-used" : "availability-ready",
            rune.acted ? "ACTED \u2713" : "NOT ACTED \u25CB"
          );
          acted.title = rune.acted ? "This rune has acted this turn; Ambush gets no bonus when attacking it." : "This rune has not acted this turn; Ambush gets +1 damage when attacking it, unless it is defending Intangible.";
          status.append(acted);
        }
        if (frenzyAttacks !== null) {
          const attacks = node(
            "span",
            frenzyAttacks < 2 || rune.commandedActionAvailable ? "availability-ready" : "availability-used",
            `ATTACKS ${frenzyAttacks}/2`
          );
          attacks.title = `${frenzyAttacks} Frenzy attacks used this turn.${rune.commandedActionAvailable ? " Command grants one additional action." : ""}`;
          status.append(attacks);
        }
        meta.append(status);
        button.append(statusEffects, image, meta);
      } else {
        button.append(node("span", "slot-label", describeSlot(slot)));
      }
      const showPreview = () => {
        if (!isActionTarget(selection, selectedActions(), game.currentPlayer, playerIndex, slot)) return;
        targetPreview = { targetPlayer: playerIndex, targetSlot: slot };
        renderEffectLinks();
      };
      const clearPreview = () => {
        if (targetPreview?.targetPlayer !== playerIndex || targetPreview.targetSlot !== slot) return;
        targetPreview = null;
        if (button.isConnected) renderEffectLinks();
      };
      button.addEventListener("mouseenter", showPreview);
      if (rune) button.addEventListener("mouseenter", () => exciteRuneParticles(playerIndex, rune.stack[0].id));
      button.addEventListener("focus", showPreview);
      button.addEventListener("mouseleave", () => {
        if (document.activeElement !== button) clearPreview();
      });
      button.addEventListener("blur", () => {
        if (!button.matches(":hover")) clearPreview();
      });
      button.addEventListener("click", () => chooseSlot(playerIndex, slot));
      if (preserved && column.start < Number(preserved.style.gridColumnStart)) {
        row.insertBefore(button, preserved);
      } else {
        row.append(button);
      }
    }
    if (start === 0 && isMine) {
      const action = getFrontlineFifthAction(slots, selection, options);
      if (action) {
        const destination = action.type === "play" ? action.slot : action.to;
        const verb = action.type === "play" ? "place" : "move";
        const button = node("button", "slot legal");
        button.type = "button";
        button.dataset.player = String(playerIndex);
        button.dataset.placementSlot = String(destination);
        button.dataset.placementSide = "right";
        button.style.gridColumn = "9 / span 2";
        button.setAttribute("aria-label", `Frontline 5: ${verb} in ${describeSlot(destination)} on the right`);
        button.title = `${verb === "place" ? "Places a rune" : "Moves the selected rune"} in ${describeSlot(destination)}; the battlefield still holds four runes.`;
        button.append(node("span", "slot-label", "frontline 5"));
        button.addEventListener("click", () => chooseSlot(playerIndex, destination, "right"));
        row.append(button);
      }
    }
  }
  function renderHand() {
    const hand = $("hand");
    const viewer = viewPlayer();
    const scrollLeft = hand.dataset.player === String(viewer) && hand.dataset.turn === String(game.turn) ? hand.scrollLeft : 0;
    hand.dataset.player = String(viewer);
    hand.dataset.turn = String(game.turn);
    hand.replaceChildren();
    const player = game.players[viewer];
    $("hand-count").textContent = `(${player.hand.length})`;
    for (const group of orderHand(player.hand, handOrder)) {
      const stack = node("div", "hand-stack");
      const card = group[0];
      const button = node("button", "hand-card");
      button.type = "button";
      button.draggable = true;
      button.dataset.cardId = card.id;
      button.style.zIndex = group.length;
      button.setAttribute("aria-label", `${card.name}, rank ${card.rank}${group.length > 1 ? `, ${group.length} copies` : ""}`);
      if (selection?.kind === "hand" && selection.cardId === card.id) button.classList.add("selected");
      button.append(artwork(card), node("span", "hand-card-name", `${card.name}${group.length > 1 ? ` \xD7${group.length}` : ""}`));
      button.addEventListener("click", () => chooseHand(card));
      button.addEventListener("dragstart", (event) => {
        setDragHoverTarget(null);
        draggedCardId = card.id;
        setDragImage(event, button);
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", card.name);
        chooseHand(card, true);
      });
      button.addEventListener("dragend", () => {
        if (draggedCardId !== card.id) return;
        draggedCardId = null;
        setDragHoverTarget(null);
        if (selection?.kind === "hand" && selection.cardId === card.id) cancelSelection();
      });
      stack.append(button);
      for (let index = 1; index < group.length; index++) {
        const underneath = node("span", "hand-card hand-card-under");
        underneath.style.zIndex = group.length - index;
        underneath.setAttribute("aria-hidden", "true");
        underneath.append(artwork(group[index]));
        stack.append(underneath);
      }
      hand.append(stack);
    }
    hand.scrollLeft = scrollLeft;
  }
  $("hand-order").addEventListener("click", () => {
    handOrder = handOrder === "color" ? "rank" : "color";
    const button = $("hand-order");
    button.textContent = `Sort: ${handOrder === "color" ? "Color" : "Rank"}`;
    button.setAttribute("aria-label", `Hand sorted by ${handOrder}; switch to ${handOrder === "color" ? "rank" : "color"}`);
    renderHand();
    $("hand").scrollLeft = 0;
  });
  function renderDetails(links) {
    const details = $("details");
    details.replaceChildren();
    if (!inspected) {
      details.append(node("p", null, "Select a rune to inspect it."));
      return;
    }
    const { card, rune, playerIndex } = inspected;
    details.append(artwork(card));
    details.append(node("h3", null, card.name));
    details.append(node("p", "detail-rank", `RANK ${card.rank} \xB7 ${card.colors.join(" / ").toUpperCase()}`));
    details.append(node("p", null, card.attributeText));
    const attribute = rune ? getRuneAttribute(rune) : card.attribute;
    if (attribute === "spectral" || attribute === "masterful" || attribute === "transpose") {
      details.append(node("p", "detail-tip", "This attribute can only be activated from the Frontline."));
    }
    const moreInfo = node("button", "button secondary more-info", "More info");
    moreInfo.type = "button";
    moreInfo.setAttribute("aria-label", `More info about ${card.name}`);
    moreInfo.addEventListener("click", () => showRuneInfo(card, rune));
    details.append(moreInfo);
    if (rune) {
      const stats = getRuneStats(rune, game.players[playerIndex]);
      const slot = game.players[playerIndex].slots.indexOf(rune);
      const disabled = isRuneDisabled(game, playerIndex, slot);
      details.append(node("p", "detail-stats", `Health ${stats.health}/${stats.maxHealth}  \xB7  Attack ${stats.attack}`));
      if (getRuneAttribute(rune) === "lightning") {
        details.append(node("p", "detail-stats", "Lightning deals normal combat damage and disables the opposing rune through the end of its next turn when attacking or defending."));
      }
      if (card.attribute === "focus") {
        details.append(node("p", "detail-stats", rune.focusCopy ? `Copied from ${rune.focusCopy.name}: ${rune.focusCopy.attributeText}` : "Focus has no copied attribute."));
      }
      if (rune.haunted) details.append(node("p", "detail-stats", "Haunted: -1 attack until destroyed."));
      if (rune.amplification) details.append(node("p", "detail-stats", `Amplifying: +${rune.amplification} attack.`));
      if (rune.infusionAttackBonus) details.append(node("p", "detail-stats", `Infusion: +${rune.infusionAttackBonus} attack until the start of its owner's next turn.`));
      if (rune.commandedActionAvailable) details.append(node("p", "detail-stats", "Command: one additional attack, attribute, or upgrade is available this turn."));
      if (rune.snared) details.append(node("p", "detail-stats", "Snared: cannot move or swap this turn, but can still act."));
      if (rune.stunned) details.append(node("p", "detail-stats", "This rune cannot move or act during its owner's next turn."));
      if (rune.lightningDisabledThroughTurn >= game.turn) {
        details.append(node("p", "detail-stats", "Lightning: disabled through the end of its next turn."));
      }
      if (disabled) details.append(node("p", "detail-stats", "Disabled; defensive effects still work."));
      for (const effect of effectDescriptions(links, playerIndex, slot)) {
        details.append(node("p", "detail-stats", `${effect}.`));
      }
      if (rune.temporaryHealth) details.append(node("p", "detail-stats", `Temporary health: ${rune.temporaryHealth} (lost first when damaged).`));
      const upgradeAvailable = rune.acted && playerIndex === game.currentPlayer && ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE && game.turn === 2 && getLegalActions(game).some((action) => action.type === "upgrade" && action.slot === slot);
      const frenzyAttacks = getRuneAttribute(rune) === "frenzy" ? rune.attacksUsed ?? 0 : null;
      details.append(node("p", "detail-stats", rune.stunned || disabled ? "Movement and action unavailable." : `Movement: ${rune.snared ? "blocked by Snare" : rune.moved ? "used" : "available"}  \xB7  ${upgradeAvailable ? "Upgrade available" : `Action: ${rune.acted ? "used" : "available"}`}${frenzyAttacks === null ? "" : `  \xB7  Attacks: ${frenzyAttacks}/2 used`}`));
    }
  }
  function showRuneInfo(card, rune) {
    $("rune-info-title").textContent = card.name;
    const content = $("rune-info-content");
    content.replaceChildren();
    for (const section of getRuneRuleSections(card, rune?.focusCopy)) {
      const group = node("section", "rune-info-section");
      group.append(node("h3", null, section.title));
      if (section.description) group.append(node("p", null, section.description));
      const list2 = node("ul");
      for (const rule of section.rules) list2.append(node("li", null, rule));
      group.append(list2);
      content.append(group);
    }
    const general = node("details", "rune-info-general");
    general.append(node("summary", null, "General game rules"));
    const list = node("ul");
    for (const rule of generalRuneRules) list.append(node("li", null, rule));
    general.append(list);
    content.append(general);
    pauseFeedback();
    pauseBoardAnimation();
    $("rune-info-dialog").showModal();
  }
  function renderFocusChoice() {
    const choices = getLegalActions(game).filter((action) => action.type === "chooseFocus");
    const panel = $("focus-choice");
    const show = choices.length > 0 && !handoff && !isAiTurn();
    panel.hidden = !show;
    if (!show) {
      setFocusTargetPreview(null, null);
      return false;
    }
    const slot = choices[0].slot;
    const player = game.players[game.currentPlayer];
    const rune = player.slots[slot];
    $("focus-title").textContent = `Focus at ${describeSlot(slot)}`;
    const options = $("focus-options");
    options.replaceChildren();
    for (const action of choices.filter((choice) => choice.slot === slot)) {
      const source = action.sourceSlot === null ? null : player.slots[action.sourceSlot].stack.at(-1);
      const focusCopy = source ? { attribute: source.attribute, name: source.name, attributeText: source.attributeText } : null;
      const lethal = getRuneStats({ ...rune, focusCopy }, player).health <= 0;
      const text = source ? `${source.name} (${describeSlot(action.sourceSlot)}): ${source.attributeText}` : "No attribute";
      const button = node("button", "button secondary focus-option", `${text}${lethal ? " \u2014 Focus will be destroyed" : ""}`);
      button.type = "button";
      button.dataset.sourceSlot = action.sourceSlot === null ? "" : String(action.sourceSlot);
      const updatePreview = () => {
        const active = options.querySelector(".focus-option:hover") ?? options.querySelector(".focus-option:focus");
        setFocusTargetPreview(slot, active?.dataset.sourceSlot ? Number(active.dataset.sourceSlot) : null);
      };
      button.addEventListener("mouseenter", updatePreview);
      button.addEventListener("mouseleave", updatePreview);
      button.addEventListener("focus", updatePreview);
      button.addEventListener("blur", updatePreview);
      button.addEventListener("click", () => {
        setFocusTargetPreview(null, null);
        perform(action);
      });
      options.append(button);
    }
    options.firstElementChild.focus();
    return true;
  }
  function render(preserveHand = false, preservedRune = null) {
    const current = game.currentPlayer;
    const viewer = viewPlayer();
    const other = 1 - viewer;
    $("turn-label").textContent = `TURN ${game.turn}`;
    $("player-label").textContent = game.winner === null ? isAiTurn() ? "AI's turn" : `Player ${current + 1}` : game.winner === "draw" ? "Round drawn" : gameMode === "ai" && game.winner === 1 ? "AI wins" : `Player ${game.winner + 1} wins`;
    $("board-turn").textContent = game.winner === null ? `${isAiTurn() ? "AI" : `PLAYER ${current + 1}`} \xB7 TURN ${game.turn}` : "BATTLE OVER";
    $("opponent-label").textContent = gameMode === "ai" ? "AI" : `PLAYER ${other + 1}`;
    const opponentHandCount = game.players[other].hand.length;
    const opponentRuneCount = game.players[other].slots.filter(Boolean).length;
    const opponentHandLabel = `OPPONENT \xB7 ${opponentRuneCount}/${game.runeLimit} RUNES \xB7 ${opponentHandCount} CARD${opponentHandCount === 1 ? "" : "S"} IN HAND`;
    if ($("opponent-hand-count").textContent !== opponentHandLabel) $("opponent-hand-count").textContent = opponentHandLabel;
    $("command-turn").textContent = game.winner === "draw" ? "ROUND DRAWN" : isAiTurn() ? "AI TURN" : "YOUR TURN";
    $("command-title").textContent = game.winner === "draw" ? "Play another round" : isAiTurn() ? "AI is playing" : "Make your move";
    $("message").textContent = message;
    $("no-progress").textContent = `Turns without progress: ${game.noProgressTurns}/${NO_PROGRESS_TURN_LIMIT}`;
    $("rune-capacity").textContent = `Runes in play: ${game.players[viewer].slots.filter(Boolean).length}/${game.runeLimit}`;
    const links = getEffectLinks(game);
    renderRow("opponent-back", other, 4, links, preservedRune);
    renderRow("opponent-front", other, 0, links, preservedRune);
    renderRow("player-front", viewer, 0, links, preservedRune);
    renderRow("player-back", viewer, 4, links, preservedRune);
    renderEffectLinks(links);
    if (!preserveHand) renderHand();
    renderDetails(links);
    const options = selectedActions();
    $("move").disabled = !options.some((action) => action.type === "move");
    $("attack").disabled = !options.some((action) => action.type === "attack");
    $("attribute").disabled = !options.some((action) => action.type === "attribute");
    renderActionWheel(options);
    const selectedAttribute = selection?.kind === "rune" && selection.mode === "attribute" ? getRuneAttribute(game.players[current].slots[selection.slot]) : null;
    $("trade-undo").hidden = !["masterful", "bolt"].includes(selectedAttribute) || selection.targetSlots.length === 0;
    $("cancel").disabled = !selection;
    $("end-turn").disabled = !getLegalActions(game).some((action) => action.type === "endTurn");
    $("concede").disabled = !hasStarted || game.winner !== null;
    $("next-round").hidden = game.winner !== "draw";
    $("download-ai-log").hidden = !aiLog;
    renderLearningStatus();
    $("handoff").hidden = !handoff;
    const choosingFocus = renderFocusChoice();
    $("offer-draw").disabled = !hasStarted || game.winner !== null || isAiTurn() || handoff || choosingFocus || drawOfferPhase !== null || game.pendingDrawOffer !== null || game.pendingDeflection !== null;
    $("draw-offer").hidden = drawOfferPhase === null;
    $("game").inert = handoff || choosingFocus || drawOfferPhase !== null;
    $("battlefield").inert = isAiTurn();
    $("controls").inert = isAiTurn();
    $("inspect-panel").inert = isAiTurn();
    if (handoff) {
      $("handoff-previous").textContent = handoffAfterDraw ? "The previous round ended in a draw." : handoffPrompt ?? `Player ${2 - current} ended their turn.`;
      $("handoff-title").textContent = `Player ${current + 1}'s turn`;
      $("ready").focus();
    }
    const deflectionDialog = $("deflection-choice-dialog");
    if (game.pendingDeflection && !handoff && !isAiTurn()) {
      const defender = game.players[game.pendingDeflection.player].slots[game.pendingDeflection.target];
      const defenderName = gameMode === "ai" && game.pendingDeflection.player === 1 ? "The AI" : `Player ${game.pendingDeflection.player + 1}`;
      $("deflection-choice-message").textContent = `${defenderName}'s ${defender.stack.at(-1).name} can take the normal attack or roll to deflect it.`;
      if (!deflectionDialog.open && !document.querySelector("dialog[open]")) deflectionDialog.showModal();
    } else if (deflectionDialog.open) {
      deflectionDialog.close();
    }
    if (drawOfferPhase !== null) {
      const offeringPlayer = game.currentPlayer + 1;
      const receivingPlayer = 2 - game.currentPlayer;
      $("draw-offer-ready").hidden = drawOfferPhase === "response";
      $("draw-offer-response").hidden = drawOfferPhase !== "response";
      $("draw-offer-title").textContent = drawOfferPhase === "return" ? `Pass back to Player ${offeringPlayer}` : `Player ${receivingPlayer}`;
      $("draw-offer-message").textContent = drawOfferPhase === "response" ? `Player ${offeringPlayer} offered a draw. Accept or decline?` : drawOfferPhase === "return" ? "The draw was declined. Pass the device back to continue the turn." : "Pass the device to the other player. The current hand stays hidden.";
      (drawOfferPhase === "response" ? $("draw-decline") : $("draw-offer-ready")).focus();
    }
  }
  function setDragHoverTarget(slot) {
    if (dragHoverTarget === slot) return;
    dragHoverTarget?.classList.remove("drag-hover");
    dragHoverTarget = slot;
    dragHoverTarget?.classList.add("drag-hover");
  }
  $("battlefield").addEventListener("dragover", (event) => {
    const slot = event.target.closest(".slot");
    if (!slot || !slot.classList.contains("legal")) {
      setDragHoverTarget(null);
      return;
    }
    const isMine = Number(slot.dataset.player) === game.currentPlayer;
    const draggingHand = draggedCardId && selection?.kind === "hand" && selection.cardId === draggedCardId;
    const draggingRune = draggedRune && selection?.kind === "rune" && selection.slot === draggedRune.slot && draggedRune.player === game.currentPlayer;
    const destination = Number(slot.dataset.placementSlot ?? slot.dataset.slot);
    const canMoveRune = draggingRune && isMine && selectedActions().some((action) => action.type === "move" && action.from === draggedRune.slot && action.to === destination);
    const canAttackTarget = draggingRune && selection.mode === "attack" && !isMine && selectedActions().some((action) => action.type === "attack" && action.slot === draggedRune.slot && action.target === Number(slot.dataset.slot));
    const canPlayCard = draggingHand && isMine && selectedActions().some((action) => (action.type === "play" || action.type === "upgrade") && action.slot === destination);
    if (!canPlayCard && !canMoveRune && !canAttackTarget) {
      setDragHoverTarget(null);
      return;
    }
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    setDragHoverTarget(slot);
  });
  $("battlefield").addEventListener("dragleave", (event) => {
    if (event.relatedTarget && $("battlefield").contains(event.relatedTarget)) return;
    setDragHoverTarget(null);
  });
  $("battlefield").addEventListener("drop", (event) => {
    const slot = event.target.closest(".slot.legal");
    if (!slot) {
      setDragHoverTarget(null);
      return;
    }
    const isMine = Number(slot.dataset.player) === game.currentPlayer;
    const destination = Number(slot.dataset.placementSlot ?? slot.dataset.slot);
    const action = selectedActions().find((item) => {
      if (draggedCardId && selection?.kind === "hand" && selection.cardId === draggedCardId) {
        return isMine && (item.type === "play" || item.type === "upgrade") && item.slot === destination;
      }
      if (!draggedRune || selection?.kind !== "rune" || selection.slot !== draggedRune.slot || draggedRune.player !== game.currentPlayer) return false;
      return isMine ? item.type === "move" && item.from === draggedRune.slot && item.to === destination : selection.mode === "attack" && item.type === "attack" && item.slot === draggedRune.slot && item.target === Number(slot.dataset.slot);
    });
    setDragHoverTarget(null);
    if (!action) return;
    event.preventDefault();
    draggedCardId = null;
    draggedRune = null;
    perform(action, null, slot.dataset.placementSide === "right" ? "right" : "left");
  });
  function selectMove() {
    targetPreview = null;
    selection.mode = "move";
    message = "Choose a glowing friendly position to move or swap.";
    render();
  }
  function selectAttack() {
    targetPreview = null;
    selection.mode = "attack";
    message = "Choose a glowing enemy rune to attack.";
    render();
  }
  function selectAttribute() {
    targetPreview = null;
    const rune = game.players[game.currentPlayer].slots[selection.slot];
    const attribute = getRuneAttribute(rune);
    if (attribute === "masterful" || attribute === "bolt") {
      const amounts = [...new Set(selectedActions().filter((action) => action.type === "attribute").map((action) => action.targetSlots.length))].sort((a, b) => a - b);
      const choices = $("trade-options");
      $("trade-title").textContent = `${rune.stack.at(-1).name}: trade hit points`;
      choices.replaceChildren();
      for (const amount of amounts) {
        const button = node("button", "button secondary", String(amount));
        button.type = "button";
        button.setAttribute("aria-label", `Trade ${amount} hit point${amount === 1 ? "" : "s"}`);
        button.addEventListener("click", () => {
          selection.mode = "attribute";
          selection.tradeAmount = amount;
          selection.targetSlots = [];
          message = `Choose an enemy once per damage point (0/${amount}); repeat a target to assign more.`;
          $("trade-dialog").close();
          render();
        });
        choices.append(button);
      }
      pauseFeedback();
      pauseBoardAnimation();
      $("trade-dialog").showModal();
      choices.firstElementChild.focus();
      return;
    }
    selection.mode = "attribute";
    if (attribute === "mending") {
      message = "Choose a glowing damaged friendly rune to restore 1 hit point.";
    } else if (attribute === "amplifying") {
      message = "Choose another glowing friendly rune to give it +1 attack.";
    } else if (attribute === "soulbind") {
      message = "Choose another friendly rune to redirect its HP loss to Soulbind until your next turn.";
    } else if (attribute === "command") {
      message = "Choose another friendly rune that has already used its action. It may attack, use an attribute, or upgrade; movement remains separate.";
    } else if (attribute === "martyr") {
      message = "Choose another friendly rune that has already used its action this turn. Martyr will be destroyed.";
    } else if (attribute === "recall") {
      message = "Choose another friendly rune in either row to return to your hand with all attached runes.";
    } else if (attribute === "spectral") {
      message = "Choose a glowing enemy rune to disable. Intangible is immune.";
    } else if (attribute === "snare") {
      message = "Choose a glowing enemy rune to prevent it from moving or swapping during its next turn.";
    } else if (attribute === "fire") {
      message = `Choose a glowing enemy rune. ${rune.stack.at(-1).name} will be destroyed.`;
    } else if (attribute === "acid") {
      selection.targetSlots = [];
      const count = selectedActions().find((action) => action.type === "attribute").targetSlots.length;
      message = `Choose ${count} different enemy rune${count === 1 ? "" : "s"} for Acid (0/${count}). ${rune.stack.at(-1).name} will be destroyed.`;
    } else if (attribute === "transpose") {
      selection.targetSlots = [];
      message = "Choose two opposing runes to swap. Both positions must be legal; Transpose ignores Snare.";
    } else if (attribute === "fire-ball") {
      message = `Choose Fire Ball's main enemy target for 2 damage. All other enemies take 1 damage; ${rune.stack.at(-1).name} will be destroyed.`;
    } else if (attribute === "magma") {
      message = "Choose a glowing enemy rune, then Magma will roll a die.";
    } else if (attribute === "soul") {
      message = "Choose a glowing enemy rune, then Soul will roll a die.";
    } else {
      throw new Error(`Unsupported active attribute: ${attribute}`);
    }
    render();
  }
  $("move").addEventListener("click", selectMove);
  $("attack").addEventListener("click", selectAttack);
  $("attribute").addEventListener("click", selectAttribute);
  $("accept-attack").addEventListener("click", () => {
    const action = getLegalActions(game).find((candidate) => candidate.type === "acceptAttack");
    if (!action) throw new Error("No normal-attack response is pending.");
    $("deflection-choice-dialog").close();
    perform(action);
  });
  $("choose-deflection").addEventListener("click", () => {
    const action = getLegalActions(game).find((candidate) => candidate.type === "deflectAttack");
    if (!action) throw new Error("No deflection response is pending.");
    $("deflection-choice-dialog").close();
    perform(action);
  });
  $("wheel-move").addEventListener("click", selectMove);
  $("wheel-attack").addEventListener("click", selectAttack);
  $("wheel-attribute").addEventListener("click", selectAttribute);
  $("trade-cancel").addEventListener("click", () => $("trade-dialog").close());
  $("trade-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      $("trade-dialog").close();
    }
  });
  $("trade-undo").addEventListener("click", () => {
    selection.targetSlots.pop();
    message = `Choose an enemy once per damage point (${selection.targetSlots.length}/${selection.tradeAmount}); repeat a target to assign more.`;
    render();
  });
  function cancelSelection() {
    draggedCardId = null;
    draggedRune = null;
    selection = null;
    targetPreview = null;
    inspected = null;
    message = "Select a card or rune to see its available actions.";
    render();
  }
  $("cancel").addEventListener("click", cancelSelection);
  $("wheel-cancel").addEventListener("click", cancelSelection);
  function cancelSelectionOnRightClick(event) {
    const tradeOpen = $("trade-dialog").open;
    if (!selection || isAiTurn() || document.querySelector("dialog[open]") && !tradeOpen) return;
    event.preventDefault();
    if (tradeOpen) $("trade-dialog").close();
    cancelSelection();
  }
  $("game").addEventListener("contextmenu", cancelSelectionOnRightClick);
  $("trade-dialog").addEventListener("contextmenu", cancelSelectionOnRightClick);
  $("action-wheel").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelSelection();
    }
  });
  $("end-turn").addEventListener("click", () => perform({ type: "endTurn" }));
  $("offer-draw").addEventListener("click", () => {
    if ($("offer-draw").disabled) return;
    $("confirm-draw-dialog").showModal();
  });
  $("confirm-draw-cancel").addEventListener("click", () => $("confirm-draw-dialog").close());
  $("confirm-draw-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      $("confirm-draw-dialog").close();
    }
  });
  $("confirm-draw").addEventListener("click", () => {
    $("confirm-draw-dialog").close();
    if ($("offer-draw").disabled) return;
    if (gameMode === "local") drawOfferPhase = "handoff";
    perform({ type: "offerDraw", player: game.currentPlayer });
    if (gameMode === "ai") {
      const type = acceptsDrawOffer(game, 1) ? "acceptDraw" : "declineDraw";
      perform({ type, player: 1 });
      if (type === "declineDraw") $("ai-draw-response-dialog").showModal();
    }
  });
  $("ai-draw-response-continue").addEventListener("click", () => $("ai-draw-response-dialog").close());
  $("draw-offer-ready").addEventListener("click", () => {
    drawOfferPhase = drawOfferPhase === "handoff" ? "response" : null;
    render();
  });
  $("draw-accept").addEventListener("click", () => {
    drawOfferPhase = null;
    perform({ type: "acceptDraw", player: 1 - game.currentPlayer });
  });
  $("draw-decline").addEventListener("click", () => {
    drawOfferPhase = "return";
    perform({ type: "declineDraw", player: 1 - game.currentPlayer });
  });
  function openConcedeDialog() {
    if (!hasStarted || game.winner !== null) return;
    cancelAiTurn();
    pauseFeedback();
    pauseBoardAnimation();
    const player = viewPlayer();
    const winner = gameMode === "ai" ? "the AI" : `Player ${2 - player}`;
    $("concede-message").textContent = `Player ${player + 1} will lose and ${winner} will win.`;
    $("concede-dialog").showModal();
  }
  $("concede").addEventListener("click", openConcedeDialog);
  $("focus-concede").addEventListener("click", openConcedeDialog);
  $("concede-cancel").addEventListener("click", () => $("concede-dialog").close());
  $("concede-confirm").addEventListener("click", () => {
    const player = viewPlayer();
    $("concede-dialog").close();
    cancelBoardAnimation();
    resetFeedback();
    perform({ type: "concede", player });
  });
  function downloadAiLog(status) {
    if (!aiLog) throw new Error("There is no AI match log to download.");
    try {
      downloadJson(serializeAiLog(aiLog), `rune-manic-ai-log-${aiLog.startedAt.replace(/[:.]/g, "-")}.json`);
      status.textContent = "Download requested. The log includes both players' hands.";
    } catch (error) {
      status.textContent = `Could not download AI log: ${error.message}`;
      console.error("AI log download failed:", error);
    }
  }
  $("download-ai-log").addEventListener("click", () => downloadAiLog($("ai-log-status")));
  $("setup-download-ai-log").addEventListener("click", () => downloadAiLog($("setup-ai-log-status")));
  $("learning-retry").addEventListener("click", () => {
    if (!learningMatch?.pending) throw new Error("There is no pending learning update.");
    void saveLearningResult(learningMatch);
  });
  $("learning-pending-export").addEventListener("click", () => {
    if (!learningMatch?.pending) throw new Error("There is no pending learning update.");
    try {
      downloadJson(JSON.stringify(learningMatch.pending, null, 2), "rune-manic-learning-pending.json");
      learningMatch.status = "Pending learning export requested. The update has not been saved in this browser.";
    } catch (error) {
      learningMatch.status = `Could not export pending learning: ${error.message}`;
      console.error("Learning export failed:", error);
    }
    renderLearningStatus();
  });
  $("learning-discard").addEventListener("click", () => {
    if (!learningMatch?.pending || learningMatch.saving) throw new Error("There is no pending learning update to discard.");
    if (!window.confirm("Discard the unsaved learning update? Export it first if you want to keep it.")) return;
    learningMatch.pending = null;
    learningMatch.status = "The unsaved learning update was discarded.";
    learningMatch.log.learning.update = { status: "discarded" };
    renderLearningStatus();
  });
  $("ready").addEventListener("click", () => {
    handoff = false;
    handoffPrompt = null;
    render();
    if (game.winner === null) highlightTurn();
  });
  $("open-help").addEventListener("click", () => {
    $("new-rune-action-rule").textContent = ALLOW_SECOND_PLAYER_FIRST_TURN_UPGRADE ? "Newly played runes cannot act, except the player going second may upgrade them on their first turn." : "Newly played runes cannot act.";
    cancelAiTurn();
    pauseFeedback();
    pauseBoardAnimation();
    $("help-dialog").showModal();
  });
  $("help-close").addEventListener("click", () => $("help-dialog").close());
  $("help-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      $("help-dialog").close();
    }
  });
  $("rune-info-close").addEventListener("click", () => $("rune-info-dialog").close());
  $("rune-info-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      $("rune-info-dialog").close();
    }
  });
  createDeckFilters();
  createDeckCards();
  $("deck-browse-controls").addEventListener("change", updateDeckEditor);
  function showMenu() {
    cancelAiTurn();
    pauseFeedback();
    pauseBoardAnimation();
    refreshSavedDecks();
    $("menu-storage-status").textContent = storageIssue;
    $("menu-resume").hidden = !hasStarted;
    $("menu-resume").textContent = game.winner === null ? "Resume game" : "View battlefield";
    $("menu-dialog").showModal();
  }
  function showSetup() {
    $("setup-ai-log-status").textContent = "";
    updateSetup();
    $("setup-dialog").showModal();
  }
  function showLearningSettings() {
    learningStatus = "";
    $("snapshot-name").value = "";
    refreshLearningSettings();
    $("learning-dialog").showModal();
  }
  async function replaceLearningData(model, expectedRaw, successMessage) {
    learningBusy = true;
    refreshLearningSettings();
    try {
      await replaceLearningModel(window.localStorage, navigator.locks, expectedRaw, model);
      learningStatus = successMessage;
    } catch (error) {
      learningStatus = `Learning data was not changed: ${error.message}`;
      console.error("Could not replace learning data:", error);
    } finally {
      learningBusy = false;
      refreshLearningSettings();
    }
  }
  function openDeckEditor(origin, player = 0) {
    editorOrigin = origin;
    editingPlayer = player;
    const choice = origin === "setup" ? setupDecks[player].choice : `preset:${prebuiltDecks[0].id}`;
    draftDeck = (origin === "setup" ? setupDecks[player].deck : prebuiltDecks[0].deck).slice();
    $("deck-title").textContent = origin === "setup" ? `Build Player ${player + 1}'s deck` : "Build a deck";
    $("deck-name").value = choice.startsWith("saved:") ? choice.slice(6) : origin === "setup" && choice === "custom" ? setupDecks[player].label : "";
    $("deck-text").value = "";
    $("deck-text-status").textContent = "";
    $("deck-text-section").open = false;
    const editorChoice = choice.startsWith("saved:") && !savedDecks.some((entry) => `saved:${entry.name}` === choice) ? "custom" : choice;
    fillDeckChoices($("deck-load"), editorChoice);
    $("deck-use").hidden = origin !== "setup";
    updateDeckEditor();
    $("deck-dialog").showModal();
  }
  function closeDeckEditor() {
    $("deck-dialog").close();
    if (editorOrigin === "setup") showSetup();
    else showMenu();
  }
  $("open-menu").addEventListener("click", showMenu);
  $("menu-resume").addEventListener("click", () => {
    $("menu-dialog").close();
    scheduleAiTurn();
  });
  $("menu-dialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    if (hasStarted) {
      $("menu-dialog").close();
      scheduleAiTurn();
    }
  });
  $("menu-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      if (hasStarted) {
        $("menu-dialog").close();
        scheduleAiTurn();
      }
    }
  });
  function openNewGameSetup() {
    refreshSavedDecks();
    if (!setupDecks.length) {
      setupDecks = [0, 1].map(() => ({ choice: "random" }));
    }
    showSetup();
  }
  $("menu-new-game").addEventListener("click", () => {
    $("menu-dialog").close();
    openNewGameSetup();
  });
  $("victory-new-game").addEventListener("click", () => {
    $("victory-dialog").close();
    openNewGameSetup();
  });
  $("mode-local").addEventListener("click", () => {
    setupMode = "local";
    updateSetup();
  });
  $("mode-ai").addEventListener("click", () => {
    setupMode = "ai";
    updateSetup();
  });
  $("menu-build-deck").addEventListener("click", () => {
    $("menu-dialog").close();
    openDeckEditor("menu");
  });
  $("menu-learning").addEventListener("click", () => {
    $("menu-dialog").close();
    showLearningSettings();
  });
  $("learning-close").addEventListener("click", () => {
    if (learningBusy) return;
    $("learning-dialog").close();
    showMenu();
  });
  $("learning-dialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    $("learning-close").click();
  });
  $("learning-export").addEventListener("click", () => {
    try {
      const { model } = loadLearningCheckpoint(window.localStorage);
      downloadJson(JSON.stringify(model, null, 2), "rune-manic-learning.json");
      learningStatus = "Learning data export requested.";
    } catch (error) {
      learningStatus = `Could not export learning data: ${error.message}`;
      console.error("Learning export failed:", error);
    }
    refreshLearningSettings();
  });
  $("snapshot-save").addEventListener("click", async () => {
    if (learningControlsLocked()) return;
    learningBusy = true;
    refreshLearningSettings();
    try {
      learningAvailable();
      const snapshot = await saveLearningSnapshot(window.localStorage, navigator.locks, $("snapshot-name").value);
      learningStatus = `Saved "${snapshot.name}" as an opponent at ${snapshot.model.games} completed games.`;
      $("snapshot-name").value = "";
    } catch (error) {
      learningStatus = `Opponent was not saved: ${error.message}`;
      console.error("Could not save AI opponent:", error);
    } finally {
      learningBusy = false;
      refreshLearningSettings();
    }
  });
  $("learning-reset").addEventListener("click", () => {
    if (learningControlsLocked()) return;
    if (!window.confirm("Reset all Learning AI data? Export it first if you want to keep it.")) return;
    try {
      learningAvailable();
      const raw = window.localStorage.getItem(LEARNING_STORAGE_KEY);
      void replaceLearningData(createLearningModel(), raw, "Learning data reset.");
    } catch (error) {
      learningStatus = `Learning data was not reset: ${error.message}`;
      console.error("Learning reset failed:", error);
      refreshLearningSettings();
    }
  });
  $("learning-import").addEventListener("click", () => {
    if (!learningControlsLocked()) $("learning-import-file").click();
  });
  $("learning-import-file").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (learningControlsLocked()) throw new Error("Finish the Learning game or save its pending update first.");
      if (file.size > 65536) throw new Error("The learning data file is too large.");
      const model = parseLearningModel(await file.text());
      if (learningControlsLocked()) throw new Error("Finish the Learning game or save its pending update first.");
      if (!window.confirm("Replace current Learning AI data with this file?")) return;
      learningAvailable();
      const raw = window.localStorage.getItem(LEARNING_STORAGE_KEY);
      await replaceLearningData(model, raw, "Learning data imported.");
    } catch (error) {
      learningStatus = `Learning data was not imported: ${error.message}`;
      console.error("Learning import failed:", error);
      refreshLearningSettings();
    } finally {
      event.target.value = "";
    }
  });
  $("ai-difficulty").addEventListener("change", updateSetup);
  window.addEventListener("storage", (event) => {
    if ((event.key === LEARNING_STORAGE_KEY || event.key === null) && learningMatch && !learningMatch.finished) {
      learningMatch.status = "Learning data changed in another tab. This game can continue, but its result cannot be saved unless the original data is restored.";
      renderLearningStatus();
    }
    if ($("learning-dialog").open) refreshLearningSettings();
    if ($("setup-dialog").open) updateSetup();
  });
  for (let player = 0; player < 2; player++) {
    $(`setup-deck-${player}`).addEventListener("change", (event) => {
      const choice = event.target.value;
      setupDecks[player] = choice === "custom" ? customDecks[player] : choice === "random" ? { choice } : { choice, deck: getChosenDeck(choice) };
      updateSetup();
    });
    $(`setup-edit-${player}`).addEventListener("click", () => {
      $("setup-dialog").close();
      openDeckEditor("setup", player);
    });
    $(`setup-generate-${player}`).addEventListener("click", () => {
      if (customDecks[player] && !window.confirm("Replace this player's unsaved custom deck with a generated deck?")) return;
      customDecks[player] = {
        choice: "custom",
        label: `Generated ${setupMode === "ai" && player === 1 ? "AI" : `Player ${player + 1}`} deck`,
        deck: generateRandomDeck()
      };
      setupDecks[player] = customDecks[player];
      updateSetup();
    });
  }
  $("setup-back").addEventListener("click", () => {
    $("setup-dialog").close();
    showMenu();
  });
  $("setup-dialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    $("setup-back").click();
  });
  $("setup-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      $("setup-back").click();
    }
  });
  $("setup-start").addEventListener("click", () => {
    const warning = learningMatch?.pending ? "Start a new game? The unsaved learning update will be lost. Return to the battlefield to retry saving or export it first." : hasStarted && game.winner === null ? "Start a new game? The current game will be lost." : null;
    if (warning && !window.confirm(warning)) return;
    let checkpoint = null;
    let snapshot = null;
    let randomValues = null;
    const difficulty = $("ai-difficulty").value;
    if (setupMode === "ai" && (difficulty === "learning" || difficulty.startsWith("snapshot:") || difficulty.startsWith("builtin:"))) {
      try {
        learningAvailable();
        if (difficulty === "learning") checkpoint = loadLearningCheckpoint(window.localStorage);
        else {
          snapshot = difficulty.startsWith("builtin:") ? prebuiltLearningOpponents.find((entry) => `builtin:${entry.name}` === difficulty) : loadLearningSnapshots(window.localStorage).find((entry) => `snapshot:${entry.name}` === difficulty);
          if (!snapshot) throw new Error("The selected saved opponent is unavailable.");
        }
        randomValues = window.crypto.getRandomValues(new Uint32Array(5));
      } catch (error) {
        $("learning-setup-status").textContent = `Learning AI unavailable: ${error.message}`;
        console.error("Could not start Learning AI:", error);
        return;
      }
    }
    const randomChoices = [];
    const deckDetails = [];
    const decks = setupDecks.map((entry, player) => {
      if (entry.choice !== "random") {
        const name = entry.choice === "custom" ? entry.label : entry.choice.startsWith("preset:") ? prebuiltDecks.find((deck) => `preset:${deck.id}` === entry.choice).name : entry.choice.slice(6);
        deckDetails.push({ player, choice: entry.choice, name });
        return entry.deck.slice();
      }
      const chosen = chooseRandomDeck(savedDecks);
      deckDetails.push({ player, choice: "random", name: chosen.name });
      randomChoices.push(`${setupMode === "ai" && player === 1 ? "AI" : `Player ${player + 1}`}: ${chosen.name}`);
      return chosen.deck.slice();
    });
    const randomStarter = $("starting-player").value === "random";
    const chosenStarter = randomStarter ? Math.random() < 0.5 ? 0 : 1 : Number($("starting-player").value);
    const runeLimit = Number($("rune-limit").value);
    const nextGame = createGame(decks, chosenStarter, runeLimit);
    cancelAiTurn();
    cancelBoardAnimation();
    resetFeedback();
    gameMode = setupMode;
    aiDifficulty = $("ai-difficulty").value;
    aiPaused = false;
    playerDecks = decks;
    startingPlayer = chosenStarter;
    visualColumnOrder = [[0, 1, 2, 3], [0, 1, 2, 3]];
    roundNumber = 1;
    game = nextGame;
    aiLog = gameMode === "ai" ? createAiLog(game, aiDifficulty, deckDetails) : null;
    frozenOpponent = snapshot ? { model: snapshot.model, random: createLearningRandom(randomValues[0]) } : null;
    learningMatch = checkpoint ? {
      model: checkpoint.model,
      raw: checkpoint.raw,
      id: Array.from(randomValues.slice(1), (value2) => value2.toString(16).padStart(8, "0")).join(""),
      random: createLearningRandom(randomValues[0]),
      episode: createLearningEpisode(),
      pending: null,
      saving: false,
      finished: false,
      log: aiLog,
      status: `Learning AI: ${checkpoint.model.games} completed games. Learning updates after the game ends.`
    } : null;
    if (learningMatch) {
      aiLog.learning = {
        startingModel: structuredClone(checkpoint.model),
        matchId: learningMatch.id,
        explorationSeed: randomValues[0],
        update: { status: "not-completed" }
      };
    } else if (frozenOpponent) {
      aiLog.learning = {
        startingModel: structuredClone(snapshot.model),
        opponentName: snapshot.name,
        explorationSeed: randomValues[0],
        update: { status: "frozen" }
      };
    }
    $("ai-log-status").textContent = "";
    hasStarted = true;
    $("action-history").replaceChildren();
    $("history-empty").hidden = false;
    if (randomStarter) {
      const starterName = gameMode === "ai" && chosenStarter === 1 ? "AI" : `Player ${chosenStarter + 1}`;
      addHistory({ turn: game.turn, summary: `Random start: ${starterName} goes first.`, details: [] });
    }
    selection = null;
    inspected = null;
    handoff = false;
    handoffAfterDraw = false;
    drawOfferPhase = null;
    message = `${randomChoices.length ? `Random decks \u2014 ${randomChoices.join("; ")}. ` : ""}${isAiTurn() ? "The AI is choosing its next action." : "Select a rank 1 rune from your hand to begin."}`;
    $("setup-dialog").close();
    render();
    scheduleAiTurn();
  });
  $("victory-close").addEventListener("click", () => $("victory-dialog").close());
  function startNextRound() {
    if (game.winner !== "draw") return;
    const previousPlayer = gameMode === "local" && game.drawReason === "agreement" ? 1 - game.currentPlayer : game.currentPlayer;
    cancelAiTurn();
    cancelBoardAnimation();
    resetFeedback();
    startingPlayer = 1 - startingPlayer;
    visualColumnOrder = [[0, 1, 2, 3], [0, 1, 2, 3]];
    game = createGame(playerDecks, startingPlayer, game.runeLimit);
    roundNumber++;
    if (aiLog) recordAiLogRound(aiLog, roundNumber, game);
    const starterName = gameMode === "ai" && startingPlayer === 1 ? "AI" : `Player ${startingPlayer + 1}`;
    addHistory({ turn: game.turn, summary: `Round ${roundNumber} begins with the same decks. ${starterName} goes first.`, details: [] });
    selection = null;
    inspected = null;
    handoff = gameMode === "local" && previousPlayer !== startingPlayer;
    handoffAfterDraw = handoff;
    drawOfferPhase = null;
    message = isAiTurn() ? "The AI is choosing its next action." : "Select a rank 1 rune from your hand to begin.";
    if ($("victory-dialog").open) $("victory-dialog").close();
    render();
    scheduleAiTurn();
  }
  $("victory-next-round").addEventListener("click", startNextRound);
  $("next-round").addEventListener("click", startNextRound);
  for (const dialog of document.querySelectorAll("dialog")) {
    dialog.addEventListener("close", () => {
      resumeBoardAnimation();
      showNextFeedback();
    });
  }
  $("deck-load").addEventListener("change", (event) => {
    const choice = event.target.value;
    if (choice === "custom") {
      updateDeckEditor();
      return;
    }
    draftDeck = getChosenDeck(choice);
    $("deck-name").value = choice.startsWith("saved:") ? choice.slice(6) : "";
    updateDeckEditor();
  });
  $("deck-clear").addEventListener("click", () => {
    draftDeck = [];
    $("deck-load").value = "custom";
    updateDeckEditor();
  });
  $("deck-generate").addEventListener("click", () => {
    if (draftDeck.length && !window.confirm("Replace the current deck with a generated deck?")) return;
    draftDeck = generateRandomDeck();
    $("deck-load").value = "custom";
    $("deck-name").value = "";
    updateDeckEditor();
  });
  $("deck-copy").addEventListener("click", async () => {
    if (!draftDeck.length) {
      $("deck-text-status").textContent = "Add cards to the deck before copying its list.";
      return;
    }
    const text = formatDeckList(draftDeck);
    $("deck-text").value = text;
    $("deck-text").focus();
    $("deck-text").select();
    if (!navigator.clipboard?.writeText) {
      $("deck-text-status").textContent = "Clipboard access is unavailable. The list is selected; press Ctrl+C to copy it.";
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      $("deck-text-status").textContent = "Deck list copied.";
    } catch (error) {
      $("deck-text-status").textContent = "Could not copy automatically. The list is selected; press Ctrl+C to copy it.";
      console.error("Could not copy deck list:", error);
    }
  });
  $("deck-text").addEventListener("input", () => {
    $("deck-text-status").textContent = "";
  });
  $("deck-import").addEventListener("click", () => {
    let imported;
    try {
      imported = parseDeckList($("deck-text").value);
    } catch (error) {
      $("deck-text-status").textContent = `Could not import deck: ${error.message}`;
      return;
    }
    if (draftDeck.length && !window.confirm("Replace the current deck with the pasted list?")) {
      $("deck-text-status").textContent = "Import cancelled; the current deck is unchanged.";
      return;
    }
    draftDeck = imported;
    $("deck-load").value = "custom";
    $("deck-name").value = "";
    updateDeckEditor();
    $("deck-text-status").textContent = "Deck list imported. Name and save it if you want to keep it.";
  });
  $("deck-close").addEventListener("click", closeDeckEditor);
  $("deck-dialog").addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDeckEditor();
  });
  $("deck-dialog").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDeckEditor();
    }
  });
  $("deck-save").addEventListener("click", () => {
    const name = $("deck-name").value.trim();
    const exists = savedDecks.some((entry) => entry.name.toLowerCase() === name.toLowerCase());
    if (exists && !window.confirm(`Replace saved deck "${name}"?`)) return;
    try {
      savedDecks = saveDeck(window.localStorage, name, draftDeck, exists);
      fillDeckChoices($("deck-load"), `saved:${name}`);
      updateDeckEditor();
      $("deck-validation").textContent = `Saved "${name}" in this browser.`;
    } catch (error) {
      $("deck-validation").textContent = `Could not save deck: ${error.message}`;
    }
  });
  $("deck-delete").addEventListener("click", () => {
    const choice = $("deck-load").value;
    const name = choice.startsWith("saved:") ? choice.slice(6) : "";
    if (!name || !window.confirm(`Delete saved deck "${name}"? This cannot be undone.`)) return;
    try {
      savedDecks = deleteSavedDeck(window.localStorage, name);
      for (let player = 0; player < setupDecks.length; player++) {
        if (setupDecks[player]?.choice === choice) {
          customDecks[player] = { choice: "custom", label: name, deck: setupDecks[player].deck.slice() };
          setupDecks[player] = customDecks[player];
        }
      }
      $("deck-load").value = "custom";
      $("deck-name").value = "";
      fillDeckChoices($("deck-load"), "custom");
      updateDeckEditor();
      $("deck-validation").textContent = `Deleted "${name}". The current deck remains in the builder.`;
    } catch (error) {
      $("deck-validation").textContent = `Could not delete deck: ${error.message}`;
    }
  });
  $("deck-use").addEventListener("click", () => {
    customDecks[editingPlayer] = {
      choice: "custom",
      label: $("deck-name").value.trim() || `Custom Player ${editingPlayer + 1} deck`,
      deck: draftDeck.slice()
    };
    setupDecks[editingPlayer] = customDecks[editingPlayer];
    closeDeckEditor();
  });
  var replayingAnimationClick = false;
  document.addEventListener("click", (event) => {
    if (!boardAnimation || replayingAnimationClick || !(event.target instanceof Element)) return;
    const clicked = event.target;
    const slotButton = clicked.closest(".slot[data-player][data-slot], .slot[data-player][data-placement-slot]");
    const handButton = clicked.closest(".hand-card[data-card-id]");
    const controlButton = clicked.closest("#controls button, #action-wheel button");
    if (!slotButton && !handButton && !controlButton) return;
    const hadSelection = Boolean(selection);
    const slotTarget = slotButton ? {
      player: Number(slotButton.dataset.player),
      slot: Number(slotButton.dataset.slot ?? slotButton.dataset.placementSlot),
      placement: slotButton.dataset.placementSlot !== void 0,
      runeId: slotButton.dataset.runeId
    } : null;
    const cardId = handButton?.dataset.cardId;
    const controlId = controlButton?.id;
    event.preventDefault();
    event.stopImmediatePropagation();
    cancelBoardAnimation();
    render();
    let replacement;
    if (slotTarget?.placement) {
      replacement = [...document.querySelectorAll(".slot[data-player][data-placement-slot]")].find((button) => Number(button.dataset.player) === slotTarget.player && Number(button.dataset.placementSlot) === slotTarget.slot);
    } else if (slotTarget) {
      let player = slotTarget.player;
      let position = slotTarget.slot;
      if (slotTarget.runeId && !hadSelection) {
        const owner = [slotTarget.player, 1 - slotTarget.player].find((playerIndex) => game.players[playerIndex].slots.some((rune) => rune?.stack[0].id === slotTarget.runeId));
        if (owner === void 0) return;
        player = owner;
        position = game.players[owner].slots.findIndex((rune) => rune?.stack[0].id === slotTarget.runeId);
      }
      replacement = document.querySelector(`.slot[data-player="${player}"][data-slot="${position}"]`);
    } else if (cardId) {
      replacement = [...document.querySelectorAll(".hand-card[data-card-id]")].find((button) => button.dataset.cardId === cardId);
    } else if (controlId) {
      replacement = document.getElementById(controlId);
    }
    if (!replacement || replacement.disabled) return;
    replayingAnimationClick = true;
    try {
      replacement.click();
    } finally {
      replayingAnimationClick = false;
    }
  }, true);
  function updateBoardOverlays() {
    renderEffectLinks();
    positionActionWheel();
  }
  window.addEventListener("resize", updateBoardOverlays);
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(updateBoardOverlays).observe($("rune-board"));
  render();
  showMenu();
})();
