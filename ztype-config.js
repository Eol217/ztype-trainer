/**
 * Z-Type game config. Load this script before ztype.js (e.g. in index.html).
 *
 * EMP (Enter key): kills enemies near the player. empCount: starting EMPs per run.
 * empIncEvery: add 1 EMP every N waves (0 = never increase).
 *
 * Wave types: "EntityEnemyMine", "EntityEnemyDestroyer", "EntityEnemyOppressor".
 * - spawnWait: base seconds between spawns per wave.
 * - spawnWaitDecay / spawnWaitMin / spawnWaitMax: each wave spawnWait *= decay, then clamp.
 * - speedIncrease: each wave enemy speed is multiplied by this.
 * - types[].count: starting count of that enemy per wave.
 * - types[].incEvery: add one more of this type every N waves (0 = never increase).
 */
var ZTYPE_CONFIG_DEFAULT = {
    empCount: 3,
    empIncEvery: 0,
    spawnWaitDecay: 0.97,
    spawnWaitMin: 0.2,
    spawnWaitMax: 1,
    multiplierTiers: { 20: 2, 50: 3 },
    waves: {
        MOBILE: {
            spawnWait: 1,
            healthBoost: 0, // not used?
            speedIncrease: 1.01,
            types: [
                { type: "EntityEnemyOppressor", count: 0, incEvery: 9 },
                { type: "EntityEnemyDestroyer", count: 0, incEvery: 4 },
                { type: "EntityEnemyMine", count: 3, incEvery: 1 }
            ]
        },
        DESKTOP: {
            spawnWait: 0.7,
            healthBoost: 0,
            speedIncrease: 1.05,
            types: [
                { type: "EntityEnemyOppressor", count: 0, incEvery: 7 },
                { type: "EntityEnemyDestroyer", count: 0, incEvery: 3 },
                { type: "EntityEnemyMine", count: 3, incEvery: 1 }
            ]
        }
    }
};

// Active config (edit this, or set to ZTYPE_CONFIG_DEFAULT for defaults)
window.ZTYPE_CONFIG = {
    empCount: 3,
    empIncEvery: 10,
    spawnWaitDecay: 0.97,
    spawnWaitMin: 0.2,
    spawnWaitMax: 1,
    multiplierTiers: { 20: 2, 50: 3 },
    waves: {
        MOBILE: {
            spawnWait: 1,
            healthBoost: 0,
            speedIncrease: 1.01,
            types: [
                { type: "EntityEnemyOppressor", count: 0, incEvery: 9 },
                { type: "EntityEnemyDestroyer", count: 0, incEvery: 4 },
                { type: "EntityEnemyMine", count: 3, incEvery: 1 }
            ]
        },
        DESKTOP: {
            spawnWait: 0.7,
            healthBoost: 0,
            speedIncrease: 1.005,
            types: [
                { type: "EntityEnemyOppressor", count: 1, incEvery: 999 },
                { type: "EntityEnemyDestroyer", count: 1, incEvery: 999 },
                { type: "EntityEnemyMine", count: 8, incEvery: 999 }
            ]
        }
    }
};
