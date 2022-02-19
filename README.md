# Index

- <a href="#description">Description</a>
- <a href="#install">Install</a>
- <a href="bugs">Report a bug
- <a href="#incorporateToDiscord.js">Incorporate to discord.js</a>
  - <a href="#main">Uploading the package to the main file</a>
  - <a href="#workingWithEvents">Working with events</a>
  - <a href="#sendModal">Send modal</a>
- <a href="#documentation">Documentation</a>
  - <a href="#structures">Structures</a>
    - <a href="#Modal">Modal</a>
      - <a href="#modalConstructor">Constructor</a>
      - <a href="#modalProperties">Properties</a>
      - <a href="#modalMethods">Methods</a>
    - <a href="#TextInput">TextInput</a>
      - <a href="#textInputConstructor">Constructor</a>
      - <a href="#textInputProperties">Properties</a>
      - <a href="#textInputMethods">Methods</a>
  - <a href="#events">Events</a>
    - <a href="#modalEvent">modal</a>
      - <a href="#Example">Example</a>
  - <a href="#types">Types</a>
    - <a href="#ModalOptions">ModalOptions</a>
    - <a href="#TextInputOptions">TextInputOptions</a>
    - <a href="#TextInputStyles">TextInputStyles</a>

<a name="description">

# Description
discordjs-modal is a dedicated package for developers who want to use the new modals in discord.js
 
 <a name="install">
  
# Install
```npm install discordjs-modal```

<a name="bug">

# Report a bug
Any bug that occurs while you are using discordjs-modal and the error is produced by discordjs-modal you can report it by contacting me through discord, tag: Risto#5227 Preferably send a screenshot of the console, a brief description of the error and in case of power, a capture or the code where the error is occurring
 
 <a name="incorporateToDiscord.js">

# Incorporate to discord.js
  
<a name="main">

## Uploading the package to the main file
```js
const { Client } = require('discord.js') // Get the Client class
const client = new Client({ intents: 32767 }) // Create a new Client
const discordjsModal = require('discordjs-modal') // Define this package
discordModals(client); // It is necessary to have your client to be able to know when a modal is executed

client.login('token') // Login with your discord bot
```
<a name="workingWithEvents">
 
## Working with events
```js
const {} = require('discordjs-modal')
client.on(`interactionCreate`, (interaction) =>{
 if(interaction.isCommand()) {
  if(interaction.commandName == "ping") {
     const modal = new Modal())
     .setCustomId("example")
     .setTitle("Example Modal")
     .addComponents(
       new TextInput()
       .setLabel("What is your real name?")
       .setStyle("SHORT")
       .setPlaceholder("Enter your real name here")
       .setCustomId("name")
       .setRequired(true),
       new TextInput()
       .setLabel("How old are you?")
       .setStyle("SHORT")
       .setMax(3)
       .setCustomId("AGE")
       .setPlaceholder("Enter your age")
       )
   }
 }
})
```

---
 <a name="sendModal">

## Send Modal
To send the Modal you need to execute an interaction before and the Modal to send. The client is automatically assigned a property which will allow you to send the Modal

Following the previous example where a Modal was created, we would send the Modal as follows:
```js
client.modal.send(interaction, modal)
```
To receive the Modal you can go to the section <a href="Example">event Modal example</a>
  
<a name="documentation">

# Documentation
 
<a name="structures">

## Structures
<a name="Modal">

### Modal
 
 <a name="modalConstructor">

#### Constructor
```js
new Modal(data)
```
| Parameter  | Type | Optional | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  data | <a href="#ModalOptions">ModalOptions</a> or <a href="#Modal">Modal</a>| true | { } | Modal to clone or raw Modal data |
  
<a name="modalProperties">

#### Properties
##### .title
The title of this Modal
>Return: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---
##### .custom_id
A unique string that will be sent in the interaction when the Modal is sent
> Return: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---
##### .components
The components in this Modal
>Return: ?[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<<a href="#TextInput">TextInput</a>>
---
<a name="modalMethods">

#### Methods
##### .setTitle(*title*)
Sets the title of this Modal

| Parameter | Type | Description |
| ------------ | ------------ | ------------ | 
| *title* | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The title of this Modal
> Return: <a href="#Modal">Modal</a>

---
##### .setCustomId(*custom_id*)
Sets the custom id for this Modal

| Parameter | Type | Description |
| -- | -- |-- |
| *custom_id* | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | A unique string that will be sent in the interaction when the Modal is sent
> Return: <a href="#Modal">Modal</a>

---
##### .addComponents(*components*)
Adds components to the Modal

| Parameter | Type | Description |
| -- | -- | -- |
| *components* | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<<a href="#TextInput">TextInput</a>> | The components to add

> Return: <a href="#Modal">Modal</a>
---

<a name="TextInput">

### Text Input
<a name="textInputConstructor"> 

#### Constructor
```js
new TextInput(data)
```

| Parameter | Type | Optional | Default | Description |
| -- | -- | -- | -- | -- |
| data | <a href="#TextInputOptions">TextInputOptions</a> | true | *{ }* | TextInput to clone or raw TextInput data
 
 <a name="textInputProperties">

#### Properties
##### .custom_id
A unique string that will be sent in the interaction when the Modal is sent and TextInput is rellenated
> Return ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---
##### .label
The label for this component
>Return: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---
##### .style
The style of this TextInput
> Return: ?<a href="#TextInputStyles">TextInputStyles</a>

---
##### .min_length
The minimum input length for a text input, min 0, max 4000

> Return: ?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
---

##### .max_length
The maximum input length for a text input, min 1, max 4000
> Return: ?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

---
##### .placeholder
Placeholder text in the input 
> Return: ?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---
##### .required
Whether the TextInput is required
> Return: ?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
---
  
<a name="textInputMethods">
 
#### Methods
##### .setCustomId(*custom_id*)
Sets the custom id for this Modal

| Parameter | Type | Description
| -- | -- | -- |
| *custom_id* | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | A unique string that will be sent in the interaction when the Modal is sent and TextInput is rellenated
> Return: <a href="#TextInput">TextInput</a>

---
##### .setLabel(*label*)
Sets the label of this TextInput

| Parameter | Type | Description |
| -- | -- | -- |
| *label* | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text to be displayed on this TextInput
> Return: <a href="#TextInput">TextInput</a>

---

##### .setStyle(*style*)
Sets the style of this TextInput

| Parameter | Type | Description |
| -- | -- | -- |
| *style* | <a href="#TextInputStyles">TextInputStyles</a> | The style of this component
> Return: <a href="#TextInput">TextInput</a>

---

##### .setMinLength(*min_length*)
The minimum input length for a text input, min 0, max 4000

| Parameter | Type | Description |
| -- | -- | -- |
| *min_length* | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number of characters to be required
> Return: <a href="#TextInput">TextInput</a>

---

##### .setMaxLength(*max_length*)
The maximum input length for a text input, min 1, max 4000

| Parameter | Type | Description |
| -- | -- | -- |
| *max_length* | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number of characters to be allowed
> Return: <a href="#TextInput">TextInput</a>

---

##### .setPlaceholder(*placeholder*)
Custom placeholder text if the input is empty, max 100 characters

| Parameter | Type | Description |
| -- | -- | -- |
| *placeholder* | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Custom placeholder text |
> Return: <a href="#TextInput">TextInput</a>

---

##### .setRequired(*required*)
Custom placeholder text if the input is empty, max 100 characters

| Parameter | Type | Description
| -- | -- | -- |
| *required* | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Whether the option is required

---
<a name="events">

## Events
This package emits an event when it detects a Modal. You will be shown how to interact with the event
 
<a name="modalEvent">
 
### modal
Emitted when an modal is received

| Parameter | Type | Description
| -- | -- | -- |
| interaction | [Interaction](https://discord.js.org/#/docs/discord.js/stable/class/Interaction) | The received Modal

---

<a name="Example">
 
#### Example
```js
client.on("modal", async(interaction) => {
 if(interaction.customId == "example"){
   await interaction.deferReply()
   var embed = new MessageEmbed()
   .setColor("GREEN")
   .setTitle("This is one example)
   .addField("What is your name?", interaction.fields[0].value)
   .addField("How old are you?", interaction.fields[1].value)
   await interaction.editReply({embeds:[embed]})
 }
})
```
---
 
<a name="types">

## Types
<a name="ModalOptions">
 
### ModalOptions

| Parameter | Type | Optional | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| title | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true | *none* | The title of the popup modal |
| custom_id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true | *none* | Identifier for the component, max 100 characters |
| components | <a href="#TextInputOptions">TextInputOptions</a> | true | *none* | Between 1 and 5 (inclusive) components that make up the modal |
---

<a name="TextInputOptions">
 
### TextInputOptions
| Parameter | Type | Optional | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| custom_id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true | *none* | The id of the component
| label | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true | *none* | 	The label for this component
| style | <a href="#TextInputStyles">TextInputStyles</a> | true | *none*  | The TextInput Style
| min_length | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | true | *none* | Minimum input length for a text input, min 0, max 4000 |
| max_length | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | true | *none*  | Maximum input length for a text input, min 1, max 4000 |
| placeholder | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true | *none* | Custom placeholder text if the input is empty, max 100 characters
| value | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true | *none* | A pre-filled value for this component, max 4000 characters
| required | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | true | *false*  | Whether this component is required to be filled
---

<a name="TextInputStyles">
 
### TextInputStyles

| Name | Value | Description |
| -- | -- | -- |
| Short | 1 | A single-line input
| Paragraph | 2 | A multi-line input