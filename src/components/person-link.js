// @flow
import React from 'react';

export type LinkProps = {
  person: {
    source: {
      data: {},
      x: number,
      y: number
    },
    target: {
      data: {
        hasReigned: boolean,
        children: [void | any]
      },
      x: number,
      y: number
    }
  }
};
