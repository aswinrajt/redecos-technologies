import microsoft from '@/assets/microsoft.png';
import intel from '@/assets/intel.png';
import connexion from '@/assets/3dconnexion.png';
import solidworks from '@/assets/solidworks.png';
import nvidia from '@/assets/nvidia.png';
import zoho from '@/assets/zoho.png';
import siemens from '@/assets/siemens.png';
import zwsoft from '@/assets/zwsoft.png';

export function TechnologyLogo({name}:{name:string}) {
 const logo=name.startsWith('Intel')?intel:name.startsWith('3Dconnexion')?connexion:name.startsWith('SOLIDWORKS')?solidworks:name.startsWith('NVIDIA')?nvidia:name.startsWith('Zoho')?zoho:name.startsWith('Siemens')?siemens:name.startsWith('ZW')?zwsoft:microsoft;
 return <img src={logo} alt={`${name} brand logo`} width={24} height={24} loading="lazy" className="technology-logo"/>;
}