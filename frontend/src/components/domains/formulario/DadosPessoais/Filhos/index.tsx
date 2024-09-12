
import { useMemo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { createFakeTempGUID } from "@/commom/primitives/guid";
import { List, ListBody, ListHeader, ListHeaderActions, ListHeaderColumn, ListHeaderBtnAdd } from "@/components/form/List";
import { Filho } from "./Filho";

export function FilhosInsalt() {
    const fakeId = useMemo(() => createFakeTempGUID(), []);

    const context = useFormContext();
    const { control } = context;

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'filhos'
    });

    const addFilho = () => {
        append({
            id: fakeId.next(),
            nome: '',
            idade: 0
        });
    }

    return (
        <div className="form-control-line mt-10">
            <List>
                <ListHeader>
                    <ListHeaderColumn>
                        <span>Filhos</span>
                    </ListHeaderColumn>
                    <ListHeaderActions>
                        <ListHeaderBtnAdd onClick={addFilho} />
                    </ListHeaderActions>
                </ListHeader>
                <ListBody>
                    {fields.map((field, index) => (
                        <Filho index={index} onDelete={() => remove(index)} />
                    ))}
                </ListBody>
            </List>
        </div>
    )
}