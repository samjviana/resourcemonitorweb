/**
 * Serviço HTTP responsável por se comunicar com o servidor para coletar informações dos computadores.
 * @module HttpService 
 */

/**
 * Endereço do servidor que fornecerá as informações dos computadores
 * @constant {string} 
 */
//const url = 'http://localhost:9001';
const url = 'http://18.229.117.148:9001';

/**
 * Opções que serão usadas na requisição HTTP
 * @constant {Object}
 * @property {string} method='GET' Representa o Método que será usado
 * @property {string} redirect='follow' Representa a configuração de Redirecionamento
 */
const options = {
    method: 'GET',
    redirect: 'follow'
}

/**
 * Solicita ao servidor uma lista de computadores conectados ao servidor
 * @returns {Computer[]} Lista de computadores
 */
export function GetComputers() {
    return fetch(`${url}/computer`, options).then(response => response.json()).catch(error => console.error('GetComputers ERROR: ', error));
}

/**
 * Solicita ao servidor dados de um computador passado como parâmetro
 * @param {string} computeruuid - UUID do computador
 * @returns {Computer} Objeto contendo informações completas do Computador
 */
export function GetComputer(computeruuid) {
    return fetch(`${url}/computer/uuid=${computeruuid}`, options).then(response => response.json()).catch(error => console.error('GetComputer ERROR: ', error));
}

/**
 * Solicita ao servidor dados de leitura de uma CPU de um computador passado como parâmetro
 * @param {string} computeruuid - Nome do computador
 * @param {number} cpuidx - ID da CPU
 * @returns {CpuReading} Objeto contendo informações de leitura da CPU
 */
export function GetCpuReading(computeruuid, cpuidx) {
    return fetch(`${url}/readings/uuid=${computeruuid}/cpu/${cpuidx}`, options).then(response => response.json()).catch(error => console.error('GetCpuReading ERROR: ', error));
}

/**
 * Solicita ao servidor dados de leitura de uma GPU de um Computador passado como parâmetro
 * @param {string} computeruuid - Nome do Computador
 * @param {number} gpuidx - ID da GPU
 * @returns {GpuReading} Objeto contendo informações de leitura da GPU
 */
export function GetGpuReading(computeruuid, gpuidx) {
    return fetch(`${url}/readings/uuid=${computeruuid}/gpu/${gpuidx}`, options).then(response => response.json()).catch(error => console.error('GetGpuReading ERROR: ', error));
}

/**
 * Solicita ao servidor dados de leitura de uma RAM de um Computador passado como parâmetro
 * @param {string} computeruuid - Nome do Computador
 * @returns {RamReading} Objeto contendo informações de leitura da RAM
 */
export function GetRamReading(computeruuid) {
    return fetch(`${url}/readings/uuid=${computeruuid}/ram`, options).then(response => response.json()).catch(error => console.error('GetRamReading ERROR: ', error));
}

/**
 * Solicita ao servidor dados de leitura dos Dispositivos de Armazenamento de um Computador passado como parâmetro
 * @param {string} computeruuid - Nome do Computador
 * @returns {StorageDeviceReading} Objeto contendo informações de leitura dos Dispositivos de Armazenamento
 */
export function GetStorageDeviceReading(computeruuid) {
    return fetch(`${url}/readings/uuid=${computeruuid}/hdd`, options).then(response => response.json()).catch(error => console.error('GetStorageDeviceReading ERROR: ', error));
}