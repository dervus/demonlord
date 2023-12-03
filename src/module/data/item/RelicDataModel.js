import { contents } from '../common.js'

import { makeHtmlField } from '../helpers.js'

export default class RelicDataModel extends foundry.abstract.DataModel {
  static defineSchema() {
    return {
      description: makeHtmlField(),
      enrichedDescription: makeHtmlField(),
      contents: contents()
    }
  }
}