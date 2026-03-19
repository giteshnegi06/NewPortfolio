// src/global.d.ts

/* -------------------- Make this a module -------------------- */
export {}

/* -------------------- Imports (TOP ONLY) -------------------- */
import type { Vector3, Color, Texture, MaterialParameters } from "three"
import type { ThreeElement } from "@react-three/fiber"

/* -------------------- Static Assets -------------------- */
declare module "*.glb" {
  const src: string
  export default src
}

declare module "*.png" {
  const src: string
  export default src
}

/* -------------------- Meshline Types -------------------- */
declare module "meshline" {
  import { BufferGeometry, Material } from "three"

  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: Float32Array | Vector3[] | number[]): void
  }

  export interface MeshLineMaterialParameters extends MaterialParameters {
    color?: Color | string | number
    lineWidth?: number
    map?: Texture
    useMap?: boolean
    repeat?: [number, number]
    resolution?: [number, number]
    depthTest?: boolean
  }

  export class MeshLineMaterial extends Material {
    constructor(parameters?: MeshLineMaterialParameters)
  }
}

/* -------------------- React Three Fiber Fix -------------------- */
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<any>
    meshLineMaterial: ThreeElement<any>
  }
}