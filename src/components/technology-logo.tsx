import microsoft from '@/assets/microsoft.png.asset.json';
import intel from '@/assets/intel.png.asset.json';
import connexion from '@/assets/3dconnexion.png.asset.json';
import solidworks from '@/assets/solidworks.png.asset.json';
import nvidia from '@/assets/nvidia.png.asset.json';
import zoho from '@/assets/zoho.png.asset.json';
import siemens from '@/assets/siemens.png.asset.json';
import zwsoft from '@/assets/zwsoft.png.asset.json';
export function TechnologyLogo({name}:{name:string}) {
 const asset=name.startsWith('Intel')?intel:name.startsWith('3Dconnexion')?connexion:name.startsWith('SOLIDWORKS')?solidworks:name.startsWith('NVIDIA')?nvidia:name.startsWith('Zoho')?zoho:name.startsWith('Siemens')?siemens:name.startsWith('ZW')?zwsoft:microsoft;
 return <img src={asset.url} alt={`${name} brand logo`} width={24} height={24} loading="lazy" className="technology-logo"/>;
}