import {expect, device, element, by, waitFor} from 'detox';

describe('homeFlow', () => {
  beforeEach(async () => {
    await device.installApp();
  });
  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  it('should have home screen visible', async () => {
    await expect(element(by.id('home_screen'))).toBeVisible();
  });

  it('should load pokemons from api and show your cards', async () => {
    await waitFor(element(by.id('poke_preview_name_bulbasaur')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('poke_preview_name_caterpie'))).toBeVisible();
  });

  it('should load pokemons from api, show your cards, click on card, show selected pokemon details and back to home screen', async () => {
    await waitFor(element(by.id('poke_preview_name_bulbasaur')))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id('poke_preview_name_bulbasaur')).tap();
    await waitFor(element(by.id('poke_details_name_bulbasaur')))
      .toHaveText('Bulbasaur')
      .withTimeout(2000);
    await expect(element(by.id('poke_details_types_bulbasaur'))).toHaveText(
      'grass, poison',
    );
    await expect(element(by.id('poke_details_abilities_bulbasaur'))).toHaveText(
      'overgrow, chlorophyll',
    );
    await element(by.id('header-back')).tap();
    await expect(element(by.id('poke_preview_name_bulbasaur'))).toBeVisible();
  });

  it('should load pokemons from api, show your cards, scroll to last, click on card, show selected pokemon details and back to home screen', async () => {
    await waitFor(element(by.id('poke_preview_name_bulbasaur'))).toBeVisible();
    await element(by.id('home_flatlist')).scroll(1000, 'down');
    await waitFor(element(by.id('poke_preview_name_spearow'))).toBeVisible();
    await element(by.id('poke_preview_name_spearow')).tap();
    await waitFor(element(by.id('poke_details_name_spearow')))
      .toHaveText('Spearow')
      .withTimeout(2000);
    await expect(element(by.id('poke_details_types_spearow'))).toHaveText(
      'normal, flying',
    );
    await expect(element(by.id('poke_details_abilities_spearow'))).toHaveText(
      'keen-eye, sniper',
    );
    await element(by.id('header-back')).tap();
    await expect(element(by.id('poke_preview_name_fearow'))).toBeVisible();
  });
});
