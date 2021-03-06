export type Lottery = {
  "version": "0.1.0",
  "name": "lottery",
  "instructions": [
    {
      "name": "initializeLottery",
      "accounts": [
        {
          "name": "lotteryKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "InitializeLotteryBumps"
          }
        },
        {
          "name": "period",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "i64"
        }
      ]
    },
    {
      "name": "setLottery",
      "accounts": [
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "start",
          "type": "i64"
        },
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "treasury",
          "type": "publicKey"
        },
        {
          "name": "period",
          "type": "i64"
        }
      ]
    },
    {
      "name": "newLotteryRound",
      "accounts": [
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oldLotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "participate",
      "accounts": [
        {
          "name": "lottery",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "spendings",
          "type": {
            "array": [
              "u64",
              8
            ]
          }
        }
      ]
    },
    {
      "name": "updateParticipation",
      "accounts": [
        {
          "name": "lottery",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spendings",
          "type": {
            "array": [
              "u64",
              8
            ]
          }
        }
      ]
    },
    {
      "name": "claimParticipation",
      "accounts": [
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "lottery",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": {
              "defined": "InitializeLotteryBumps"
            }
          },
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "escrow",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "period",
            "type": "u64"
          },
          {
            "name": "lastRound",
            "type": "u64"
          },
          {
            "name": "lastTimestamp",
            "type": "i64"
          },
          {
            "name": "unclaimedPot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "lotteryRound",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "start",
            "type": "i64"
          },
          {
            "name": "spendings",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "pot",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "lotteryParticipation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "spendings",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeLotteryBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lottery",
            "type": "u8"
          },
          {
            "name": "escrow",
            "type": "u8"
          },
          {
            "name": "round",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TooSoonForNewRound",
      "msg": "Trying to start a new round earlier than the period"
    },
    {
      "code": 6001,
      "name": "RoundFinished",
      "msg": "Too late to participate in this round"
    },
    {
      "code": 6002,
      "name": "RoundNotFinished",
      "msg": "The round is not finished yet"
    }
  ]
};

export const IDL: Lottery = {
  "version": "0.1.0",
  "name": "lottery",
  "instructions": [
    {
      "name": "initializeLottery",
      "accounts": [
        {
          "name": "lotteryKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumps",
          "type": {
            "defined": "InitializeLotteryBumps"
          }
        },
        {
          "name": "period",
          "type": "u64"
        },
        {
          "name": "start",
          "type": "i64"
        }
      ]
    },
    {
      "name": "setLottery",
      "accounts": [
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "start",
          "type": "i64"
        },
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "treasury",
          "type": "publicKey"
        },
        {
          "name": "period",
          "type": "i64"
        }
      ]
    },
    {
      "name": "newLotteryRound",
      "accounts": [
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oldLotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "participate",
      "accounts": [
        {
          "name": "lottery",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "spendings",
          "type": {
            "array": [
              "u64",
              8
            ]
          }
        }
      ]
    },
    {
      "name": "updateParticipation",
      "accounts": [
        {
          "name": "lottery",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spendings",
          "type": {
            "array": [
              "u64",
              8
            ]
          }
        }
      ]
    },
    {
      "name": "claimParticipation",
      "accounts": [
        {
          "name": "lottery",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lotteryRound",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "participation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "lottery",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumps",
            "type": {
              "defined": "InitializeLotteryBumps"
            }
          },
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "escrow",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "period",
            "type": "u64"
          },
          {
            "name": "lastRound",
            "type": "u64"
          },
          {
            "name": "lastTimestamp",
            "type": "i64"
          },
          {
            "name": "unclaimedPot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "lotteryRound",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "start",
            "type": "i64"
          },
          {
            "name": "spendings",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "pot",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "lotteryParticipation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "spendings",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeLotteryBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lottery",
            "type": "u8"
          },
          {
            "name": "escrow",
            "type": "u8"
          },
          {
            "name": "round",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TooSoonForNewRound",
      "msg": "Trying to start a new round earlier than the period"
    },
    {
      "code": 6001,
      "name": "RoundFinished",
      "msg": "Too late to participate in this round"
    },
    {
      "code": 6002,
      "name": "RoundNotFinished",
      "msg": "The round is not finished yet"
    }
  ]
};
