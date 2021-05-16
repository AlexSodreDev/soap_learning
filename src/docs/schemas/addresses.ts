export const findAddresses = {
  tags: ['Find All Addresses'],
  summary: 'List Addresses',
  description: 'List all users saved in the database',

  consumes: 'application/json',
  parameters: [
    {
      in: 'query',
      name: 'ceps',
      required: true,
      description: 'insert brazilian zip code',
      type: 'integer',
      allowReserved: true,
    }
  ],

  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "bairro": {
                    "type": "string"
                  },
                  "cep": {
                    "type": "string"
                  },
                  "cidade": {
                    "type": "string"
                  },
                  "complemento2": {
                    "type": "string"
                  },
                  "end": {
                    "type": "string"
                  },
                  "uf": {
                    "type": "string"
                  }
                },
                "required": [
                  "bairro",
                  "cep",
                  "cidade",
                  "complemento2",
                  "end",
                  "uf"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "bairro": {
                    "type": "string"
                  },
                  "cep": {
                    "type": "string"
                  },
                  "cidade": {
                    "type": "string"
                  },
                  "complemento2": {
                    "type": "string"
                  },
                  "end": {
                    "type": "string"
                  },
                  "uf": {
                    "type": "string"
                  }
                },
                "required": [
                  "bairro",
                  "cep",
                  "cidade",
                  "complemento2",
                  "end",
                  "uf"
                ]
              },
            ]
          },
          "example": {
            "ceps": [29101010]
          },

        }
      }
    },
    404: {
      description: 'Not Found'
    }
  }
}
