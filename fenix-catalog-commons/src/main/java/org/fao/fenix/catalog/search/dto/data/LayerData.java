package org.fao.fenix.catalog.search.dto.data;

import org.fao.fenix.catalog.search.dto.data.dsd.LayerDSD;
import org.fao.fenix.catalog.search.dto.data.dsd.ResourceDSD;
import org.fao.fenix.msd.dto.dm.DM;
import org.fao.fenix.msd.dto.dm.type.DMLayerType;

public class LayerData extends StandardData {

    private LayerDSD DSD;
    private Object data;
    DataType dataType;

    public LayerData() { }
    public LayerData(String name, String resourceType, String sourceName, Index index, DataType dataType, Object metadata, LayerDSD DSD, Object data, Integer size) {
        super(name,resourceType,sourceName,index,metadata, size);
        this.dataType = dataType!=null ? dataType : DataType.vector;
        if ((this.data = data)!=null) {
            this.DSD = DSD!=null ? DSD : new LayerDSD();
        }
    }

    @Override
    public DataType getDataType() {
        return dataType;
    }

    @Override
    public Object getData() {
        return data;
    }

    @Override
    public ResourceDSD getDSD() {
        return DSD;
    }

}