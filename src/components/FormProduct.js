import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from '../api'

function FormProduct({ open, handleClose, update, idProduct }) {
    const form = useForm({
        defaultValues: {
            model: "",
            brand: "",
            color: "",
            price: null,
            operatingSystem: "",
            operatingSystemVersion: "",
            storage: null,
            ram: null,
            screenSize: null,
            cameraResolution: "",
            batteryCapacity: "",
            connectivity: "",
            physicalDimensions: "",
            weight: null
        }
    })
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: async (event) => {
                    event.preventDefault();
                    try {
                        const { model,
                            brand,
                            color,
                            price,
                            operatingSystem,
                            operatingSystemVersion,
                            storage,
                            ram,
                            screenSize,
                            cameraResolution,
                            batteryCapacity,
                            connectivity,
                            physicalDimensions,
                            weight } = form.watch()

                            const payload = {
                                model,
                                brand,
                                color,
                                price,
                                operatingSystem,
                                operatingSystemVersion,
                                storage,
                                ram,
                                screenSize,
                                cameraResolution,
                                batteryCapacity,
                                connectivity,
                                physicalDimensions,
                                weight
                            }

                        const response = await (update ? axios.put(`/${idProduct}`, payload) : axios.post('/', payload))
                        console.log(response)
                    } catch (error) {
                        console.error(error);
                    }
                    handleClose();
                },
            }}
        >
            <DialogTitle>Criar novo produto</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    id="model"
                    name="model"
                    label="Modelo"
                    sx={{ width: '48%', mr: 1 }}
                    margin='dense'
                    {...form.register("model")}
                />
                <TextField
                    autoFocus
                    id="brand"
                    name="brand"
                    label="Marca"
                    sx={{ width: '48%' }}
                    margin='dense'
                    {...form.register("brand")}
                />
                <TextField
                    autoFocus
                    id="color"
                    name="color"
                    label="Cor"
                    sx={{ width: '48%', mr: 1 }}
                    margin='dense'
                    {...form.register("color")}

                />
                <TextField
                    autoFocus
                    id="operatingSystem"
                    name="operatingSystem"
                    label="Sistema operacional"
                    margin='dense'
                    sx={{ width: '48%' }}
                    {...form.register("operatingSystem")}
                />
                <TextField
                    autoFocus
                    id="operatingSystemVersion"
                    name="operatingSystemVersion"
                    label="Versão sistema operacional"
                    margin='dense'
                    {...form.register("operatingSystemVersion")}
                    sx={{ width: '48%', mr: 1 }}
                />
                <TextField
                    autoFocus
                    id="storage"
                    name="storage"
                    label="Armazenamento"
                    sx={{ width: '48%' }}
                    margin='dense'
                    {...form.register("storage")}
                />
                <TextField
                    autoFocus
                    id="ram"
                    name="ram"
                    label="RAM"
                    sx={{ width: '48%', mr: 1 }}
                    margin='dense'
                    {...form.register("ram")}
                />
                <TextField
                    autoFocus
                    id="price"
                    name="price"
                    label="Preço"
                    sx={{ width: '48%' }}
                    margin='dense'
                    {...form.register("price")}
                />
                <TextField
                    autoFocus
                    id="screenSize"
                    name="screenSize"
                    label="Tamanho da tela"
                    sx={{ width: '48%', mr: 1 }}
                    margin='dense'

                    {...form.register("screenSize")}
                />
                <TextField
                    autoFocus
                    id="cameraResolution"
                    name="cameraResolution"
                    label="Resolução da camera"
                    sx={{ width: '48%' }}
                    margin='dense'
                    {...form.register("cameraResolution")}
                />
                <TextField
                    autoFocus
                    id="batteryCapacity"
                    name="batteryCapacity"
                    label="Capacidade bateria"
                    sx={{ width: '48%', mr: 1 }}
                    margin='dense'
                    {...form.register("batteryCapacity")}
                />
                <TextField
                    autoFocus
                    id="weight"
                    name="weight"
                    label="Peso"
                    sx={{ width: '48%' }}
                    margin='dense'
                    {...form.register("weight")}
                />
                <TextField
                    autoFocus
                    id="connectivity"
                    name="connectivity"
                    label="Conectividade"
                    sx={{ width: '48%', mr: 1 }}
                    margin='dense'
                    {...form.register("connectivity")}
                />
                <TextField
                    autoFocus
                    id="physicalDimensions"
                    name="physicalDimensions"
                    label="Dimensões fisicas"
                    sx={{ width: '48%' }}
                    margin='dense'
                    {...form.register("physicalDimensions")}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Criar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormProduct