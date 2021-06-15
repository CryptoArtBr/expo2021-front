import { useState } from 'react'
import { MainTitle, SectionTitle } from '../../atoms/typography/Title'
import {
  Button,
  FormSection,
  Input,
  Checkbox,
  Textarea,
  Select,
  Option,
} from '../../atoms'

import { cidades_estados } from '../rawdata/cidades-estados'
import { initialData } from './data'

export const ArtistForm = () => {
  const [formData, setFormData] = useState(initialData)

  const formDataUpdate = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const formCategoryUpdate = (category, value) => {
    setFormData({
      ...formData,
      categorias: {
        ...formData.categorias,
        [category]: value,
      },
    })
  }

  return (
    <div className="row">
      <div className="col">
        <MainTitle>CRIE SUA CONTA</MainTitle>
        <FormSection>
          <SectionTitle>sobre voce</SectionTitle>

          <div className="col-12">
            <Input
              value={formData.nome}
              onChange={(e) => formDataUpdate('nome', e.target.value)}
              label="Nome completo ou artístico"
            />
          </div>

          <div className="col-6">
            <Select
              label="Estado"
              defaultValue="estado"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  estado: e.target.value,
                  cidade: cidades_estados.estados[e.target.value].cidades[0],
                })
              }}
            >
              <Option disabled value="estado">
                estado
              </Option>
              {Object.entries(cidades_estados.estados).map(
                ([estado, estadoData]) => (
                  <Option key={estadoData.sigla} value={estado}>
                    {estadoData.nome}
                  </Option>
                ),
              )}
            </Select>
          </div>

          <div className="col-6">
            <Select
              label="Cidade"
              disabled={formData.estado === ''}
              value={formData.cidade}
              onChange={(e) => {
                formDataUpdate('cidade', e.target.value)
              }}
            >
              <Option disabled selected>
                cidade
              </Option>
              {cidades_estados.estados[formData.estado] &&
                cidades_estados.estados[formData.estado].cidades.map(
                  (cidade) => (
                    <Option value={cidade} key={cidade}>
                      {cidade}
                    </Option>
                  ),
                )}
            </Select>
          </div>
        </FormSection>

        <FormSection>
          <SectionTitle>redes sociais</SectionTitle>

          <div className="col-6">
            <Input
              value={formData.instagram}
              onChange={(e) => formDataUpdate('instagram', e.target.value)}
              label="Instagram"
            />
            <Input
              value={formData.twitter}
              onChange={(e) => formDataUpdate('twitter', e.target.value)}
              label="Twitter"
            />
          </div>

          <div className="col-6">
            <Input
              value={formData.site}
              onChange={(e) => formDataUpdate('site', e.target.value)}
              label="Site"
            />
            <Input
              value={formData.outro}
              onChange={(e) => formDataUpdate('outro', e.target.value)}
              label="Outro"
            />
          </div>
        </FormSection>

        <FormSection>
          <SectionTitle>Sobre sua Arte</SectionTitle>

          <h3>Escolha 3 categorias abaixo</h3>

          <div className="col-4">
            <Checkbox
              value="3D"
              checked={formData.categorias['3D']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="3D"
            />

            <Checkbox
              value="Ativismo"
              checked={formData.categorias['Ativismo']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Ativismo"
            />

            <Checkbox
              value="Audiovisual"
              checked={formData.categorias['Audiovisual']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Audiovisual"
            />

            <Checkbox
              value="Desenho"
              checked={formData.categorias['Desenho']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Desenho"
            />
          </div>

          <div className="col-4">
            <Checkbox
              value="Fotografia"
              checked={formData.categorias['Fotografia']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Fotografia"
            />

            <Checkbox
              value="Grafite"
              checked={formData.categorias['Grafite']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Grafite"
            />

            <Checkbox
              value="Ilustração"
              checked={formData.categorias['Ilustração']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Ilustração"
            />

            <Checkbox
              value="Literatura"
              checked={formData.categorias['Literatura']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Literatura"
            />
          </div>

          <div className="col-4">
            <Checkbox
              value="Música"
              checked={formData.categorias['Música']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Música"
            />

            <Checkbox
              value="Performance"
              checked={formData.categorias['Performance']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Performance"
            />

            <Checkbox
              value="Pintura"
              checked={formData.categorias['Pintura']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Pintura"
            />

            <Checkbox
              value="Programação"
              checked={formData.categorias['Programação']}
              onChange={(e) =>
                formCategoryUpdate(e.target.value, e.target.checked)
              }
              label="Programação"
            />
          </div>
        </FormSection>

        <FormSection>
          <SectionTitle>Sua apresentação</SectionTitle>

          <div className="col-12">
            <Textarea
              value={formData.bio}
              onChange={(e) => formDataUpdate('bio', e.target.value)}
              rows="8"
              label="Bio"
            ></Textarea>
          </div>

          <div className="col-12">
            <Input
              value={formData.video}
              onChange={(e) => formDataUpdate('video', e.target.value)}
              label="Video apresentação"
            />
          </div>
        </FormSection>

        <FormSection>
          <SectionTitle>Acesso</SectionTitle>

          <div className="col-12">
            <Input
              value={formData.email}
              onChange={(e) => formDataUpdate('email', e.target.value)}
              type="email"
              label="email"
            />
          </div>
          <div className="col-12">
            <Input
              value={formData.senha}
              onChange={(e) => formDataUpdate('senha', e.target.value)}
              type="password"
              label="senha"
            />
          </div>
        </FormSection>
        <div className="col-12">
          <Button>concluir cadastro</Button>
        </div>
      </div>
    </div>
  )
}
