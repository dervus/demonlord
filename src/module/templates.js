/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    'systems/demonlord/templates/tabs/activeeffects.hbs',
    'systems/demonlord/templates/tabs/afflictions.hbs',
    'systems/demonlord/templates/tabs/background.hbs',
    'systems/demonlord/templates/tabs/character.hbs',
    'systems/demonlord/templates/tabs/combat.hbs',
    'systems/demonlord/templates/tabs/creature-view.hbs',
    'systems/demonlord/templates/tabs/creature-reference.hbs',
    'systems/demonlord/templates/tabs/vehicle-view.hbs',
    'systems/demonlord/templates/tabs/vehicle-reference.hbs',
    'systems/demonlord/templates/tabs/creatureeffects.hbs',
    'systems/demonlord/templates/tabs/effects.hbs',
    'systems/demonlord/templates/tabs/effectsoverview.hbs',
    'systems/demonlord/templates/tabs/item.hbs',
    'systems/demonlord/templates/tabs/magic.hbs',
    'systems/demonlord/templates/tabs/talents.hbs',
    'systems/demonlord/templates/chat/challenge.hbs',
    'systems/demonlord/templates/chat/combat.hbs',
    'systems/demonlord/templates/chat/corruption.hbs',
    'systems/demonlord/templates/chat/damage.hbs',
    'systems/demonlord/templates/chat/description.hbs',
    'systems/demonlord/templates/chat/heal.hbs',
    'systems/demonlord/templates/chat/init.hbs',
    'systems/demonlord/templates/chat/makechallengeroll.hbs',
    'systems/demonlord/templates/chat/makeinitroll.hbs',
    'systems/demonlord/templates/chat/rest.hbs',
    'systems/demonlord/templates/chat/showtalent.hbs',
    'systems/demonlord/templates/chat/spell.hbs',
    'systems/demonlord/templates/chat/talent.hbs',
    'systems/demonlord/templates/chat/useitem.hbs',
    'systems/demonlord/templates/actor/actor-sheet.hbs',
    'systems/demonlord/templates/actor/limited-sheet.hbs',
    'systems/demonlord/templates/actor/sidemenu.hbs',
    'systems/demonlord/templates/actor/limited-sidemenu.hbs',
    'systems/demonlord/templates/actor/header.hbs',
    'systems/demonlord/templates/actor/limited-header.hbs',
    'systems/demonlord/templates/dialogs/choose-turn-dialog.hbs',
    'systems/demonlord/templates/dialogs/endofround-dialog.hbs',
    'systems/demonlord/templates/actor/creature-sheet.hbs',
    'systems/demonlord/templates/actor/creature-header.hbs',
    'systems/demonlord/templates/actor/creature-sidemenu.hbs',
    'systems/demonlord/templates/actor/vehicle-sheet.hbs',
    'systems/demonlord/templates/actor/vehicle-header.hbs',
    'systems/demonlord/templates/actor/vehicle-sidemenu.hbs',
    'systems/demonlord/templates/item/active-effect-config.hbs',

    // Item Sheet Partials
    'systems/demonlord/templates/item/partial/item-activation.hbs',
    'systems/demonlord/templates/item/partial/item-contents.hbs',
    'systems/demonlord/templates/item/partial/item-description.hbs',
    'systems/demonlord/templates/item/partial/item-effects.hbs',
    'systems/demonlord/templates/item/partial/item-sheet-header.hbs',
    'systems/demonlord/templates/item/partial/item-attacks.hbs',
    'systems/demonlord/templates/item/partial/item-challenge.hbs',
    'systems/demonlord/templates/item/partial/item-healing.hbs',
    'systems/demonlord/templates/item/partial/item-measured-template.hbs',
    'systems/demonlord/templates/item/item-ancestry-edit.hbs',
    'systems/demonlord/templates/item/item-ancestry-view.hbs',
    'systems/demonlord/templates/item/item-path-edit.hbs',
    'systems/demonlord/templates/item/item-path-view.hbs',
    'systems/demonlord/templates/item/item-role-edit.hbs',
    'systems/demonlord/templates/item/item-role-view.hbs',

    // Chat Partials
    'systems/demonlord/templates/chat/partial/chat-challenge.hbs',
    'systems/demonlord/templates/chat/partial/chat-attack.hbs',
    'systems/demonlord/templates/chat/partial/chat-damage.hbs',
    'systems/demonlord/templates/chat/partial/chat-measured-template.hbs',
    'systems/demonlord/templates/chat/partial/chat-effects.hbs',
    'systems/demonlord/templates/chat/partial/chat-description.hbs',
  ])
}
