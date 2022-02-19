const Styles = [`Short`, `Paragraph`]

/**
 * Create your TextInput component for the modal
 * @example
 * //Create TextInput using object
 * new TextInput({
 *  custom_id: "example"
 *  label: "What is your name?"
 *  style: "SHORT",
 *  required: true,
 *  placeholder: "Enter your name here"
 * })
 * @example
 * //Create TextInput using methods
 * new TextInput()
 * .setCustomId("example2")
 * .setLabel("How old are you?")
 * .setStyle("SHORT")
 * .setRequired(true)
 * .setPlaceholder("Enter your age here")
 */

class TextInput {

  /**
   * @typedef {object} data
   * @property {string} custom_id
   * @property {string} label
   * @property {SHORT | Paragraph} [style]
   * @property {number} [min_length]
   * @property {number} [max_length]
   * @property {string} [placeholder]
   * @property {boolean} [required]
   */

  /**
   * These are the constructor options:
   * * `custom_id` - string
   * * `label` - string
   * * `style` - string or number
   * * `min_length` - number
   * * `max_length` - number
   * * `placeholder` - string
   * * `required` - boolean
   * @param {data} [data={}]
   */

  constructor(data = {}){
    this.type = 4
    this.#setup(data)
  }

  /**
   * 
   * @param {data} data 
   */

  #setup(data) {
    this.custom_id = data.custom_id ?? null
    this.label = data.label ?? null
    this.style = data.style ? this.#resolveStyle(data.style) : 1
    this.min_length = data.min_length ?? 0
    this.max_length = data.max_length ?? 4000
    this.placeholder = data.placeholder ?? null
    this.required = data.required ?? false
  }

  /**
   * Set the custom id
   * @param {string} custom_id String with the id
   * @returns {data} The new TextInput
   */

  setCustomId(custom_id) {
    if(typeof custom_id !== `string`) throw new Error(`The type must be a string`)
    if(custom_id.length > 100) throw new Error(`You exceeded the maximum number of characters. Maximum characters: 100`)
    this.custom_id = custom_id
    return this;
  }

  /**
   * Set the label
   * @param {string} label  String with the id
   * @returns {data} The new TextInput
   */

  setLabel(label) {
    if(typeof label !== `string`) throw new Error(`The type must be a string`)
    this.label = label
    return this;
  }

  /**whether this component is required to be filled, default false
  * @param {boolean} required Is required?
  * @returns {data}
  */

  setRequired(required = true) {
    if(typeof required !== boolean) throw new Error(`The type must be a boolean`)
    this.required = required
    return this;
  }

  /**
   * 
  * @param {number} max_length 
  * @returns {data}
  */

  setMaxLength(max_length) {
    if(typeof max_length !== `number`) throw new Error(`The type must be a number`)
    if(min_length < 1) throw new Error(`The value must be greater than 1`)
    if(min_length > 4000) throw new Error(`The value must be less than 4000`)
    this.max_length = max_length
    return this
  }

  /**
   * The minimum input length for a text input, min 0, max 4000, default 0
   * @param {number} min_length Number between 0 and 4000
  * @returns {data}
  */

  setMinLength(min_length) {
    if(typeof min_length !== `number`) throw new Error(`The type must be a number`)
    if(min_length < 0) throw new Error(`The value must be greater than 0`)
    this.min_length = min_length
    if(min_length > 4000) throw new Error(`The value must be less than 4000`)
    return this
  }

  /**
   * @param {string} placeholder 
   * @returns {data}
   */

  setPlaceholder(placeholder) {
    if(typeof placeholder !== `string`) throw new Error(`The type must be a string`)
    if(placeholder.length > 100) throw new Error(`You exceeded the maximum number of characters. Maximum characters: 100`)
    this.placeholder = placeholder
    return this
  }

  /**
   * Custom the style of the TextInput
   * * `1` - `SHORT`
   * * `2` - `PARAGRAPH`
   * @param {"SHORT" | "PARAGRAPH" | number} style The style in text or number
   * @returns {data}
   */

  setStyle(style) {
    if(typeof style !== `number` || typeof style !== `string`) throw new Error(`The type must be a string or number`)
    this.style = this.resolveStyle(style);
    return this;
  }

  /**
   * A pre-filled value for this component, max 4000 characters
   * @param {string} value Default value
   * @returns {data}
   */

  setValue(value) {
    if(typeof value !== string) throw new Error(`The type must be a string`)
    if(value.length > 4000) throw new Error(`You exceeded the maximum number of characters. Maximum characters: 4000`)
    this.value = value
    return this
  }

  toJSON() {
    return {
      type: 1,
      components: [
        {
          type: this.type,
          custom_id: this.custom_id,
          label: this.label,
          style: this.style,
          min_length: this.min_length,
          max_length: this.max_length,
          placeholder: this.placeholder,
          required: this.required
        }
      ]  
    }
  }

  #resolveStyle(style) {
    return Styles.findIndex(s => s === style) + 1 || 1
  }

}

module.exports = TextInput