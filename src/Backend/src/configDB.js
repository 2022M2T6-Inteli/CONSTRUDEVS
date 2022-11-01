import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


// esses arquivos servem para configurar a abertura do banco de dados quando necessário 
export async function openDb () {
  return open({
    filename: './vagas.db',
    driver: sqlite3.Database
  })
}

export async function bancoDados () {
  return open({
    filename: './tabelaMei.db',
    driver: sqlite3.Database
  })
}