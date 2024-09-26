/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type AddPeerReview = {
  qualityOfResearch: number
  potentialForRealWorldUseCase: number
  domainKnowledge: number
  practicalityOfResultObtained: number
  metaDataMerkleRoot: string
  pdaBump: number
}

/**
 * @category userTypes
 * @category generated
 */
export const addPeerReviewBeet = new beet.FixableBeetArgsStruct<AddPeerReview>(
  [
    ['qualityOfResearch', beet.u8],
    ['potentialForRealWorldUseCase', beet.u8],
    ['domainKnowledge', beet.u8],
    ['practicalityOfResultObtained', beet.u8],
    ['metaDataMerkleRoot', beet.utf8String],
    ['pdaBump', beet.u8],
  ],
  'AddPeerReview'
)
