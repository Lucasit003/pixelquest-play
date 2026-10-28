import {preloadHero} from './actors/hero-sprites.js';
import {preloadCombatFx} from './combat-fx.js';
/* lightload2-oct27: the pre-v2 env sheets (oakhaven-buildings.png and woodland-props.png, 4.5 MB) and drawAsset are gone. A live
   game never loaded them (core/loader.js perfBoot calls this only outside a browser), so nothing drew from them. The sheets stay
   in godot/assets/env/ for the Godot project and the old map tools (tools/build-tiled-map.mjs, tools/render-map-layout-v1.mjs).
   hero: the player's class, preloaded so its downloaded sprite is ready before the first frame (no code-drawn stand-in exists).
   loader: a Node image loader (render tools); without one (jsdom, the plain boot) the combat effects are preloaded too. */
export async function loadAssets(loader,hero){const heroReady=hero?preloadHero(hero):null;if(!loader)preloadCombatFx();if(heroReady)await heroReady;}
/* drawPortrait (the generated class portraits) was removed on 8 Oct: busts come from the hero sprites (hero-sprites.js drawHeroBust). */
