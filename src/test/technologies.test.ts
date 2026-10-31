import { describe, it, expect } from 'vitest';
import { technologies, newTechnologies } from '@/lib/site-content';
describe('Confirmed engineering technology inventory',()=>{
 it('includes all ten existing technologies',()=>{
  expect(technologies).toEqual(['Windows 10 Professional','Intel','3Dconnexion','Microsoft OneDrive for Business','Microsoft Teams','SOLIDWORKS','NVIDIA Quadro','Microsoft Office 365 / Microsoft 365','Zoho Books','Siemens Solid Edge']);
 });
 it('separates the two newly purchased professional engineering packages',()=>{
  expect(newTechnologies).toEqual(['ZWCAD 2D Professional','ZW3D Professional']);
 });
});