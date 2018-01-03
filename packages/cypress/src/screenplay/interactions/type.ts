import {Interaction, UsesAbilities} from '@serenity-js/core/lib/screenplay';

import {BrowseTheWeb} from '../abilities/browse_the_web';

export class Type implements Interaction {

    static text = (text: string) => ({on: (selector: string) => new Type(text, selector)});

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return Promise.resolve(BrowseTheWeb.as(actor).get(this.selector).type(this.text));
    }

    constructor(private text: string, private selector: string) {
    }

    toString = () => `{0} types '${this.text}' on ${this.selector}`;
}
