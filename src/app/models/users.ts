export  class  Users {
  private id: number;
  private  username: string;
   private email: string;
   private password: string;
  private nom: string;
  private prenom: string;
  private avatar: string;
  token: string;
  private archivage: boolean;

  constructor(
     id: number,
     username: string,
     password: string,
     email: string,
     nom: string,
     prenom: string,
     avatar: string,
     token: string,
     archivage: boolean

){
this.id = id;
this.email = username;
this.password = password;
this.username = username;
this.nom = nom;
this.prenom = prenom;
this.avatar = avatar;
this.archivage = archivage;
this.token = token;

  }
  getId(): number{
    return this.id;
  }
  getEmail(): string{
    return this.email;
  }
getPassword(): string{
    return  this.password;
}
getUsername(): string{
    return this.username;
}
 getNom(): string{
    return  this.nom;
}
getPrenom(): string{
    return this.prenom;
}
getAvatar(): string{
  return  this.avatar;
}
getToken(): string{
    return this.token;
}
getArchivage(): boolean{
    return this.archivage;
}
}



