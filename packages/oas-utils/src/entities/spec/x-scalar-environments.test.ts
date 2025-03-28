import { describe, expect, it } from 'vitest'

import { parseJsonOrYaml } from '@/helpers/parse.ts'
import baseDefinition from '@/spec-extentions/x-scalar-environments.yaml?raw'
import { xScalarEnvironmentsSchema } from './x-scalar-environments.ts'

describe('x-scalar-environments', () => {
  it('Handles spec definition', () => {
    const parsed = parseJsonOrYaml(baseDefinition)

    expect(xScalarEnvironmentsSchema.parse(parsed['x-scalar-environments'])).toEqual(parsed['x-scalar-environments'])
  })
})
