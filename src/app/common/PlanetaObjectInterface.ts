export interface PlanetaObjectInterface {
  sistemaSolar: SistemaSolar
}

export interface SistemaSolar {
  estrellaCentral: string
  planetas: Planeta[]
}

export interface Planeta {
  nombre: string
  tipo: string
  diametro_km: number
  distancia_media_sol_km: number
  periodo_orbital_dias: number
  numero_lunas: number
  tiene_anillos: boolean
}
