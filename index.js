const Interaction = require(`./src/structures/Interaction`),
Modal = require(`./src/structures/Modal`),
TextInput = require(`./src/structures/TextInput`)

module.exports = function (client) {
  client.modal = {
    send: (interaction, modal) => {
      return client.api.interactions(interaction.id)[interaction.token].callback.post({ data: { type: 9, data: modal.toJSON() } });
    }
  }

  client.ws.on('INTERACTION_CREATE', (data) => {
    if (!data.type) return
    if(data.type && data.type == 5) client.emit('Modal', new Interaction(client, data))
  })
}

module.exports.Modal = Modal
module.exports.TextInput = TextInput