# Boilerplate Shopify Theme

## How to set up

First, install Shopify's [Themekit](https://shopify.github.io/themekit/). Once that is installed, you follow the next steps:

### Configure Store Theme
First you need to hook up to a current them for local development. You can do so by running this:

`theme configure --password=[your-api-password] --store=[your-store.myshopify.com] --themeid=[your-theme-id]`

This should net you a `config.yml` file which points to your theme.

### Clone the repository
Go to `github.com/realMJDev/ShopifyBoilerplate`,
then clone the repo into your project folder.

FIRST, go you your `config.yml` file...

## How to get develop
To develop on this theme, you have to run both the `theme watcher` and `webpack bundler` at the same time. Run one of the commands, and then split the terminal to run the other.

The `webpack bundler` bundles the CSS and JS files in the `src` dir, then it sends it to the `assets` directory.

Once this happens, the `theme watcher` sees a change in the `asses` directory, then uploads the changed file(s) to the Shopify theme online.

Here are the commands to get started:

- Run `yarn theme` to start the theme watcher
- Run `yarn dev` to start the src bundler

# !CAUTION!

When you are working on the live theme, it deploys to the LIVE site, so be careful in what you do. Also, never run `theme deploy` when working with an existing theme, this WILL overwrite the store's content in the customizer.

Before, working on a theme, to be sure, make a backup of the `config/settings_data.json`. If by any change the content disappears(MJ), you can restore this file.
