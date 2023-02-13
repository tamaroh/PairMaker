# PairMaker

> _Automate making a list of pairs and reduce workload_

# Motivation

Reduce workload for B2B instructors making pairs.

This app will:

- Enter the student's name and then run the application, it will automatically update Google Spreadsheet with results (pairs of 20 days)

# ⚙️ Getting Started

Before running any scripts, you'll need additional setups. After 1 steps, you should run the next command.

```shell
$ npm install
$ npm server-dev
$ npm react-start
```

Steps:

1. Setup API key and environment variables


## 1. Setup API Key And Environment Variables

1. [Visit Google Developer Console](https://console.developers.google.com/) and create a new project.

- Enable Google Sheets API
- Create service account
- Create OAuth 2.0 client ID
- Download JSON credentials (Get `client_email`, `private_key` from service account and `client_id` from 0Auth 2.0 client ID)

2. [Visit GitHub's OAuth App Registration](https://github.com/settings/applications/new) and fill in the form. Then, generate a new client secret.

After creating all necessary keys, run next command and paste appropriate values.

```shell
$ cp .env.example .env
```

> _Note: When running app in local, make sure to set `Authorized JavaScript origins` to `http://localhost:3000`. [See reference](#🔗-reference) on creating oauth web client ID for more details_


# How To Use

Enter the names of the students in the text input field, one at a time.
And click the `Make pairs` button to create a pairs and update Google Spreadsheet.

# 🚧 Warning

This app is:

- Expected to be a temporary solution
- Not designed to be scalable
- Not designed for mobile or with accessability (some are included in UI library)

# 🔗 Reference

- [Create a Google Cloud project](https://developers.google.com/workspace/guides/create-project)
- [Google Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com)
- [Create the OAuth web client ID](https://support.google.com/workspacemigrate/answer/9222992)