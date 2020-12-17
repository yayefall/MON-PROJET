export  class Profils {

     private id: number;
     private libelle: string;
     private  archivage: boolean;


   constructor(id: number,
               libelle: string,
               archivage: boolean) {
    this.id = id;
    this.libelle = libelle;
    this.archivage = archivage;
   }
   getId(): number{
     return this.id;
   }
   getLibelle(): string{
     return  this.libelle;
   }
   getArchivage(): boolean{
     return this.archivage;
   }
}
