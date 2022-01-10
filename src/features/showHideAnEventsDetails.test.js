import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
test('When the user opens the page, all event details are collapsed by default', ({ given, when, then }) => {
    	given('that the user hasn\'t interacted with the page', () => {

    	});

    	when('the user views the page', () => {

    	});

    	then('all event elements are collapsed', () => {

    	});
    });

    test('The user can click on an event to see its details', ({ given, when, then }) => {
    	given('that the user is interested in an event', () => {

    	});

    	when('the user clicks on the event', () => {

    	});

    	then('the event element expands and shows its details', () => {

    	});
    });

    test('The user can close an event\'s details by clicking on it', ({ given, when, then }) => {
    	given('that the event element is expanded', () => {

    	});

    	when('the user is finished reading the details', () => {

    	});

    	then('the user can click on the event to collapse it', () => {

    	});
    });

});

