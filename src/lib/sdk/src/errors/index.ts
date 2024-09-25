/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * InvalidInstruction: 'Invalid Instruction (this ix is not supported)'
 *
 * @category Errors
 * @category generated
 */
export class InvalidInstructionError extends Error {
  readonly code: number = 0x0;
  readonly name: string = "InvalidInstruction";
  constructor() {
    super("Invalid Instruction (this ix is not supported)");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidInstructionError);
    }
  }
}

createErrorFromCodeLookup.set(0x0, () => new InvalidInstructionError());
createErrorFromNameLookup.set(
  "InvalidInstruction",
  () => new InvalidInstructionError()
);

/**
 * InvalidSigner: 'Invalid Signer'
 *
 * @category Errors
 * @category generated
 */
export class InvalidSignerError extends Error {
  readonly code: number = 0x1;
  readonly name: string = "InvalidSigner";
  constructor() {
    super("Invalid Signer");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidSignerError);
    }
  }
}

createErrorFromCodeLookup.set(0x1, () => new InvalidSignerError());
createErrorFromNameLookup.set("InvalidSigner", () => new InvalidSignerError());

/**
 * PaperAlreadyExists: 'Paper already exists'
 *
 * @category Errors
 * @category generated
 */
export class PaperAlreadyExistsError extends Error {
  readonly code: number = 0x2;
  readonly name: string = "PaperAlreadyExists";
  constructor() {
    super("Paper already exists");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PaperAlreadyExistsError);
    }
  }
}

createErrorFromCodeLookup.set(0x2, () => new PaperAlreadyExistsError());
createErrorFromNameLookup.set(
  "PaperAlreadyExists",
  () => new PaperAlreadyExistsError()
);

/**
 * PubkeyMismatch: 'Pubkey mismatch'
 *
 * @category Errors
 * @category generated
 */
export class PubkeyMismatchError extends Error {
  readonly code: number = 0x3;
  readonly name: string = "PubkeyMismatch";
  constructor() {
    super("Pubkey mismatch");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PubkeyMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x3, () => new PubkeyMismatchError());
createErrorFromNameLookup.set(
  "PubkeyMismatch",
  () => new PubkeyMismatchError()
);

/**
 * InvalidState: 'Invalid state'
 *
 * @category Errors
 * @category generated
 */
export class InvalidStateError extends Error {
  readonly code: number = 0x4;
  readonly name: string = "InvalidState";
  constructor() {
    super("Invalid state");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidStateError);
    }
  }
}

createErrorFromCodeLookup.set(0x4, () => new InvalidStateError());
createErrorFromNameLookup.set("InvalidState", () => new InvalidStateError());

/**
 * NotEnoughApprovals: 'Not enough approvals'
 *
 * @category Errors
 * @category generated
 */
export class NotEnoughApprovalsError extends Error {
  readonly code: number = 0x5;
  readonly name: string = "NotEnoughApprovals";
  constructor() {
    super("Not enough approvals");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, NotEnoughApprovalsError);
    }
  }
}

createErrorFromCodeLookup.set(0x5, () => new NotEnoughApprovalsError());
createErrorFromNameLookup.set(
  "NotEnoughApprovals",
  () => new NotEnoughApprovalsError()
);

/**
 * PeerReviewAlreadyExists: 'Peer Review already exists'
 *
 * @category Errors
 * @category generated
 */
export class PeerReviewAlreadyExistsError extends Error {
  readonly code: number = 0x6;
  readonly name: string = "PeerReviewAlreadyExists";
  constructor() {
    super("Peer Review already exists");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PeerReviewAlreadyExistsError);
    }
  }
}

createErrorFromCodeLookup.set(0x6, () => new PeerReviewAlreadyExistsError());
createErrorFromNameLookup.set(
  "PeerReviewAlreadyExists",
  () => new PeerReviewAlreadyExistsError()
);

/**
 * InvalidFeeReceiver: 'Invalid Fee Receiver'
 *
 * @category Errors
 * @category generated
 */
export class InvalidFeeReceiverError extends Error {
  readonly code: number = 0x7;
  readonly name: string = "InvalidFeeReceiver";
  constructor() {
    super("Invalid Fee Receiver");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidFeeReceiverError);
    }
  }
}

createErrorFromCodeLookup.set(0x7, () => new InvalidFeeReceiverError());
createErrorFromNameLookup.set(
  "InvalidFeeReceiver",
  () => new InvalidFeeReceiverError()
);

/**
 * ResearcherProfileAlreadyExists: 'Profile already exists'
 *
 * @category Errors
 * @category generated
 */
export class ResearcherProfileAlreadyExistsError extends Error {
  readonly code: number = 0x8;
  readonly name: string = "ResearcherProfileAlreadyExists";
  constructor() {
    super("Profile already exists");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, ResearcherProfileAlreadyExistsError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x8,
  () => new ResearcherProfileAlreadyExistsError()
);
createErrorFromNameLookup.set(
  "ResearcherProfileAlreadyExists",
  () => new ResearcherProfileAlreadyExistsError()
);

/**
 * ResearcherProfileNotFound: 'Profile not found'
 *
 * @category Errors
 * @category generated
 */
export class ResearcherProfileNotFoundError extends Error {
  readonly code: number = 0x9;
  readonly name: string = "ResearcherProfileNotFound";
  constructor() {
    super("Profile not found");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, ResearcherProfileNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x9, () => new ResearcherProfileNotFoundError());
createErrorFromNameLookup.set(
  "ResearcherProfileNotFound",
  () => new ResearcherProfileNotFoundError()
);

/**
 * NotAllowedForPeerReview: 'Not allowed for peer review'
 *
 * @category Errors
 * @category generated
 */
export class NotAllowedForPeerReviewError extends Error {
  readonly code: number = 0xa;
  readonly name: string = "NotAllowedForPeerReview";
  constructor() {
    super("Not allowed for peer review");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, NotAllowedForPeerReviewError);
    }
  }
}

createErrorFromCodeLookup.set(0xa, () => new NotAllowedForPeerReviewError());
createErrorFromNameLookup.set(
  "NotAllowedForPeerReview",
  () => new NotAllowedForPeerReviewError()
);

/**
 * PaperNotFound: 'Paper not found'
 *
 * @category Errors
 * @category generated
 */
export class PaperNotFoundError extends Error {
  readonly code: number = 0xb;
  readonly name: string = "PaperNotFound";
  constructor() {
    super("Paper not found");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PaperNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0xb, () => new PaperNotFoundError());
createErrorFromNameLookup.set("PaperNotFound", () => new PaperNotFoundError());

/**
 * SerializationError: 'serialization error'
 *
 * @category Errors
 * @category generated
 */
export class SerializationErrorError extends Error {
  readonly code: number = 0xc;
  readonly name: string = "SerializationError";
  constructor() {
    super("serialization error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, SerializationErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0xc, () => new SerializationErrorError());
createErrorFromNameLookup.set(
  "SerializationError",
  () => new SerializationErrorError()
);

/**
 * SizeOverflow: 'Size overflow'
 *
 * @category Errors
 * @category generated
 */
export class SizeOverflowError extends Error {
  readonly code: number = 0xd;
  readonly name: string = "SizeOverflow";
  constructor() {
    super("Size overflow");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, SizeOverflowError);
    }
  }
}

createErrorFromCodeLookup.set(0xd, () => new SizeOverflowError());
createErrorFromNameLookup.set("SizeOverflow", () => new SizeOverflowError());

/**
 * ImmutableAccount: 'Account is Immutable'
 *
 * @category Errors
 * @category generated
 */
export class ImmutableAccountError extends Error {
  readonly code: number = 0xe;
  readonly name: string = "ImmutableAccount";
  constructor() {
    super("Account is Immutable");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, ImmutableAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0xe, () => new ImmutableAccountError());
createErrorFromNameLookup.set(
  "ImmutableAccount",
  () => new ImmutableAccountError()
);

/**
 * PdaPubekyMismatch: 'PDA pubkey mismatch'
 *
 * @category Errors
 * @category generated
 */
export class PdaPubekyMismatchError extends Error {
  readonly code: number = 0xf;
  readonly name: string = "PdaPubekyMismatch";
  constructor() {
    super("PDA pubkey mismatch");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PdaPubekyMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0xf, () => new PdaPubekyMismatchError());
createErrorFromNameLookup.set(
  "PdaPubekyMismatch",
  () => new PdaPubekyMismatchError()
);

/**
 * PublisherCannotAddPeerReview: 'Publisher cannot add a peer review to their own paper'
 *
 * @category Errors
 * @category generated
 */
export class PublisherCannotAddPeerReviewError extends Error {
  readonly code: number = 0x10;
  readonly name: string = "PublisherCannotAddPeerReview";
  constructor() {
    super("Publisher cannot add a peer review to their own paper");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PublisherCannotAddPeerReviewError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x10,
  () => new PublisherCannotAddPeerReviewError()
);
createErrorFromNameLookup.set(
  "PublisherCannotAddPeerReview",
  () => new PublisherCannotAddPeerReviewError()
);

/**
 * InvalidReputationChecker: 'Invalid Reputation checker'
 *
 * @category Errors
 * @category generated
 */
export class InvalidReputationCheckerError extends Error {
  readonly code: number = 0x11;
  readonly name: string = "InvalidReputationChecker";
  constructor() {
    super("Invalid Reputation checker");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidReputationCheckerError);
    }
  }
}

createErrorFromCodeLookup.set(0x11, () => new InvalidReputationCheckerError());
createErrorFromNameLookup.set(
  "InvalidReputationChecker",
  () => new InvalidReputationCheckerError()
);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
