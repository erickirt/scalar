// TODO: This is a copy of packages/core-interface/src/database/utility.ts
/**
 * Overwrite a target object a new replacement object handling removed keys
 */
export function objectMerge<A extends object, B extends object>(target: A, replacement: B) {
  // Clear any keys that have been removed in the replacement
  Object.keys(target).forEach((key) => {
    if (!Object.hasOwn(replacement, key)) {
      delete target[key as keyof A]
    }
  })

  Object.assign(target, replacement)

  return target as unknown as B
}

/**
 * Type safe version of Object.keys
 * Can probably remove this whenever typescript adds it
 */
export const getObjectKeys = <T extends object>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[]
