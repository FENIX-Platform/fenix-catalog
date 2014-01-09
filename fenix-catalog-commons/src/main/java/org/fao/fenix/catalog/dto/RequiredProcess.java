package org.fao.fenix.catalog.dto;

import java.util.Map;

public class RequiredProcess {

    private String name;
    private Map<String,Object> properties;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Object> getProperties() {
        return properties;
    }

    public void setProperties(Map<String, Object> properties) {
        this.properties = properties;
    }
}
