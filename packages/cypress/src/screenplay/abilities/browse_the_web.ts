import { Ability, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import VisitOptions = Cypress.VisitOptions;

export class BrowseTheWeb implements Ability {

    /**
     *
     * Instantiates the Ability to use Cypress, allowing the Actor to interact with a Web UI
     *
     * @param browser
     * @return {BrowseTheWeb}
     */
    static usingCypress() {
        return new BrowseTheWeb();
    }

    /**
     * Used to access the Actor's ability to BrowseTheWeb from within the Interaction classes, such as Click or Enter
     *
     * @param actor
     * @return {BrowseTheWeb}
     */
    static as(actor: UsesAbilities): BrowseTheWeb {
        return actor.abilityTo(BrowseTheWeb);
    }

    visit(url: string, options?: Partial<VisitOptions>): PromiseLike<void> {
        cy.visit(url);
        return Promise.resolve();
    }

    get(locator: string): Cypress.Chainable {
        return cy.contains(locator);
    }

}
