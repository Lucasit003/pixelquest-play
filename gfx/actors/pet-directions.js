/* Only baked, reviewed source sets belong here. Missing directions keep their original side art;
   no sprite is rotated, stretched or recoloured to invent a north/south view. */
export const PET_DIRECTION_ATLASES=Object.freeze({
 fire:'pet-fire-directions-v1',study:'pet-study-directions-v1',speed:'pet-speed-directions-v1',
 defence:'pet-defence-directions-v1',loot:'pet-loot-directions-v1',
});
export const petDirectionAtlas=pet=>pet?.directionSprite||PET_DIRECTION_ATLASES[pet?.key]||null;
export function petSpriteIds(pet){return pet?[pet.sprite||'pet-'+pet.key,...(petDirectionAtlas(pet)?[petDirectionAtlas(pet)]:[])]:[];}
