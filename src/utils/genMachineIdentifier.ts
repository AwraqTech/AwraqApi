import os from 'os';
import crypto from 'crypto';

export const genUniqueMachineId = (): string => {
  const cpus = os.cpus();
  const cpuInfo = cpus.map(cpu => cpu.model + cpu.speed).join('');
  
  const macAddress = (() => {
    const networkInterfaces = os.networkInterfaces();
    for (const iface of Object.values(networkInterfaces)) {
      if (iface) {
        for (const info of iface) {
          if (!info.internal && info.mac) {
            return info.mac;
          }
        }
      }
    }
    return '';
  })();

  const osInfo = os.platform() + os.release();

  const uniqueId = crypto
    .createHash('sha256')
    .update(cpuInfo + macAddress + osInfo)
    .digest('hex');

  return uniqueId;
};
