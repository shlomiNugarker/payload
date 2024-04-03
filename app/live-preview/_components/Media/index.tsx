import type { ElementType } from 'react'

import React, { Fragment } from 'react'

import type { Props } from './types.js'

import { Image } from './Image/index.js'
import { Video } from './Video/index.js'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo = typeof resource !== 'string' && resource?.mimeType?.includes('video')
  const Tag = (htmlElement as ElementType) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? (
        <Video {...props} />
      ) : (
        <Image {...props} /> // eslint-disable-line
      )}
    </Tag>
  )
}