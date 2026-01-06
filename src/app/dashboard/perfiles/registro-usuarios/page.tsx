"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserPlus, User, Calendar } from "lucide-react";


function UsersForm() {
  
  const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastname: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    age: z.number().min(1, "La edad debe ser mayor a 0").max(120, "Edad inválida"),
  })


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      age: 0,
    }
  })

  //Para capturar errores del formulario
  console.log(form.formState.errors);

  const onSubmit = form.handleSubmit(values =>{
    console.log(values);
  })

  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:p-8">
      <Card className="shadow-lg bg-card">
        <CardHeader className="space-y-2 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <UserPlus className="h-7 w-7 text-primary" />
            </div>
            <div>
              <CardTitle className="text-3xl font-semibold">Registro de Usuarios</CardTitle>
              <CardDescription className="mt-1.5 text-base">
                Completa la información para crear un nuevo usuario
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator className="mb-8" />
        <CardContent className="pb-8">
          <Form {...form}>
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <FormField 
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-sm font-medium flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Nombre
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ingrese su nombre" 
                          type="text" 
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="lastname"
                  render={({field}) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-sm font-medium flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Apellido
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ingrese su apellido" 
                          type="text" 
                          className="h-12 text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Edad
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="h-12 text-base"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(value === "" ? 0 : Number(value));
                          }}
                          placeholder="Ingrese su edad"
                          value={field.value === 0 ? "" : field.value}
                          min="1"
                          max="120"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <Separator className="my-8" />
              
              <div className="flex justify-end gap-4 pt-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => form.reset()}
                  className="px-8 h-11 text-base"
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="px-8 h-11 text-base shadow-sm"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Registrar Usuario
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default UsersForm;
