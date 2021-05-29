enum DamageType {
    Acid, 
    Bludgeoning, 
    Cold, 
    Fire, 
    Force, 
    Lightning, 
    Necrotic, 
    Piercing, 
    Poison, 
    Psychic, 
    Radiant,
    Slashing, 
    Thunder
}

enum LogType {
    Check = "Check",
    ToHit = "To Hit",
    Damage = "Damage"
}

export interface Log {
    Character: String,
    Type: LogType,
    DamageType: DamageType,
    Amount: Number
}
