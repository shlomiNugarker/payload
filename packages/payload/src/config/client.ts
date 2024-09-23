import type { MappedComponent } from '../admin/types.js'
import type { ClientCollectionConfig } from '../collections/config/client.js'
import type {
  LivePreviewConfig,
  SanitizedConfig,
  ServerOnlyLivePreviewProperties,
} from './types.js'

export type ServerOnlyRootProperties = keyof Pick<
  SanitizedConfig,
  | 'bin'
  | 'cors'
  | 'csrf'
  | 'custom'
  | 'db'
  | 'editor'
  | 'email'
  | 'endpoints'
  | 'graphQL'
  | 'hooks'
  | 'onInit'
  | 'plugins'
  | 'secret'
  | 'sharp'
  | 'typescript'
>

export type ServerOnlyRootAdminProperties = keyof Pick<SanitizedConfig['admin'], 'components'>

export type ClientConfig = {
  admin: {
    components: {
      actions?: MappedComponent[]
      Avatar: MappedComponent
      graphics: {
        Icon: MappedComponent
        Logo: MappedComponent
      }
      LogoutButton?: MappedComponent
    }
    dependencies?: Record<string, MappedComponent>
    livePreview?: Omit<LivePreviewConfig, ServerOnlyLivePreviewProperties>
  } & Omit<SanitizedConfig['admin'], 'components' | 'dependencies' | 'livePreview'>
  collections: ({
    admin: Pick<ClientCollectionConfig['admin'], 'enableRichTextRelationship' | 'group'>
    labels: {
      plural: string
      singular: string
    }
  } & Pick<ClientCollectionConfig, 'slug' | 'upload'>)[]
  custom?: Record<string, any>
  globals: {
    admin: Pick<SanitizedConfig['globals'][0]['admin'], 'group'>
    label: string
    slug: string
  }[]
} & Omit<SanitizedConfig, 'admin' | 'collections' | 'globals' | ServerOnlyRootProperties>

export const serverOnlyConfigProperties: readonly Partial<ServerOnlyRootProperties>[] = [
  'endpoints',
  'db',
  'editor',
  'plugins',
  'sharp',
  'onInit',
  'secret',
  'hooks',
  'bin',
  'typescript',
  'cors',
  'csrf',
  'email',
  'custom',
  'graphQL',
  // `admin`, `onInit`, `localization`, `collections`, and `globals` are all handled separately
]
