package controllers

import (
    "github.com/beego/beego/v2/client/httplib"
    beggo "github.com/beego/beego/v2/server/web"
    "encoding/json"
)

type MainController struct {
    beggo.Controller
}

type Property struct {
    ID           string   `json:"id"`
    Title        string   `json:"title"`
    Price        float64  `json:"price"`
    Images       []string `json:"images"`
    Bedrooms     int      `json:"bedrooms"`
    Bathrooms    int      `json:"bathrooms"`
    SqFt         int      `json:"sqft"`
    Amenities    []string `json:"amenities"`
    Location     string   `json:"location"`
}

func (c *MainController) Get() {
    c.TplName = "index.tpl"
}

func (c *MainController) GetProperties() {
    req := httplib.Get("http://localhost:8080/v1/property/list")
    var result []Property
    
    resp, err := req.Bytes()
    if err != nil {
        c.Data["json"] = map[string]interface{}{"error": err.Error()}
    } else {
        json.Unmarshal(resp, &result)
        c.Data["json"] = result
    }
    
    c.ServeJSON()
}