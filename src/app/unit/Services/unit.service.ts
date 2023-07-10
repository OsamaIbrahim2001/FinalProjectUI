import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addunit } from '../Models/addunit';
import { Observable } from 'rxjs';
import { UpdateDuration } from '../Models/update-duration';
import { UnitCard } from '../Models/unit-card';
import { Favorites } from '../Models/favorites';
import { UnitDetails } from '../Models/unit-details';
import { City } from '../Models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  baseUrl:string="http://localhost:5219/api/";
  constructor(private http:HttpClient) { }
  AddUnit(unit:any){
    return this.http.post<any>(this.baseUrl+"Unit/addUnit/"+localStorage.getItem('token'),unit);
  }

  getCategory():Observable<any>{
    return this.http.get<any[]>("http://localhost:5219/api/category");
  }
      getGovernerateData() {
     return this.http.get<any[]>('assets/Data/GovernamentsData.json');
    }

    getMenuPrice(){
      return this.http.get<any[]>(this.baseUrl+"MenuPrice");
    }

    setDuration(updateDuration:UpdateDuration){
      return this.http.put<any>(this.baseUrl+"Unit/setDuration/"+localStorage.getItem('token'),updateDuration);
    }

    getAllUnits():Observable<UnitCard[]>{
      return this.http.get<UnitCard[]>(this.baseUrl+"Unit/getUnits");
    }

    getFavorites(){
      return this.http.get<Favorites[]>(this.baseUrl+"Favorite/getFavorites/"+localStorage.getItem('token'));
    }
    addFavorites(unitId:number){
      return this.http.post(this.baseUrl+"Favorite/"+localStorage.getItem('token'),unitId);
    }
    removeFavorites(unitId:number){
      return this.http.delete(this.baseUrl+"Favorite/"+localStorage.getItem('token')+"/"+unitId);
    }

    getUnitDetails(unitID:any){
      return this.http.get<UnitDetails>(this.baseUrl+"Unit/getUnit/"+unitID);
    }

    getCities(){
      return this.http.get<City[]>(this.baseUrl+"Unit/getCities");
    }
}
