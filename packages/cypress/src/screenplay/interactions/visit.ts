import { Interaction, UsesAbilities } from '@serenity-js/core/lib/screenplay';

import { BrowseTheWeb } from '../abilities';

export class Visit implements Interaction {

    static browserOn = (url: string) => new Visit(url);

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return BrowseTheWeb.as(actor).visit(this.url);
    }

    constructor(private url: string) { }

    toString = () => `#actor opens the browser at "${this.url}"`;
}
