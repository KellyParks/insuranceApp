# Item Insurance App

This is a .NET SPA, with Angular 8 as the front-end framework. The idea is simple: create an app to manage a list of items, their value, and their applicable category. Once an item is added to a list, it should appear under the correct category, and the sum total of all the items in a given category should be updated. There should also be functionality to remove an item from the list. 

I've used the framework in .NET to create an API endpoint to perform CRUD operations on the items. That endpoint is called from the front-end using Angular's HttpClient service. I set up the application to initialize with a local database using SQLite so that data would persist.

## To Run:

Open the project in Visual Studio 2019, and click the run button "IIS Express" at the top in VS 2019.

## Design Decisions:

### Server Side and Database

Files I created:
- Controllers/ItemsController.cs
- Models/Item.cs
- Models/ItemContext.cs
- Migrations/ItemContextModelSnapshot.cs
- Migrations/20200427025254_InitialCreate.cs

In larger applications, models are usually referred to throughout the application. So I started out by building the model in its own separate folder and namespace. This allows the code to be more organized and maintainable. 

The controllers and contexts were auto-generated using the CLI, but their separation into different namespaces and folders serve the same purpose of organizing the code in a maintainable, malleable way.

I created a migration (using the .NET CLI) to build the Items table.

### Client Side

Files I created:
- src/app/calculation.service.ts
- src/app/item-api.service.ts
- src/app/interfaces
- src/app/home
- src/app/itemComponents

The home component manages the full list of items, and relays information to its children (the add-item-form and item-information components). 

The add-item-form component fires off an event when a new item is added. The POST action on the endpoint returns the saved item, so I just passed that along in the event emitter to the parent, then pushed the item element to the list. This saves the front end from having to refresh or otherwise make another GET call.

The home component's other child, the item-information component, offers the user the ability to remove an item from the list. When an item is deleted, the item-information component fires off an event to tell the parent that the list is changed, and it needs to make a GET request to get the updated list.

I wanted to keep the client side DRY and keep concerns separated. At first I created a single component that managed the main content of the app, then started splitting it up into services, components, templates and interfaces, using dependency injection where required. Sectioning out the concerns into their own parts makes those parts more flexible, maintainable and easier to test.

### Tests
Currently, only the front-end components are tested.
To run the Angular tests, run `ng test` from the ClientApp directory.
