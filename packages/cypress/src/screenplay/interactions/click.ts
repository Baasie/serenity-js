import { Interaction, UsesAbilities } from '@serenity-js/core/lib/screenplay';

import { BrowseTheWeb } from '../abilities/browse_the_web';

export class Click implements Interaction {

    public static on(selector: string): Click {
        return new Click(selector);
    }

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return Promise.resolve(BrowseTheWeb.as(actor).get(this.selector).click());
    }

    constructor(private selector: string) { }

    toString = () => `{0} clicks on ${this.selector}`;
}
