<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">{{ $t('局名') }}</th>
            <th class="text-center" scope="col">{{ $t('電話番号') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('総合的な新型コロナ対策に関するご相談') }}
            </td>
            <td class="bureau">
              {{ $t('健康福祉企画課 薬務・感染症対策室') }}
            </td>
            <td class="tel"><a href="tel:023-630-2315">023-630-2315</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader
  },
  data() {
    return {
      pc: true
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string
    }
  }
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        font-size: 14px !important;
      }

      td {
        padding: 0 16px;
        font-size: 14px;
      }

      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }

        tbody tr {
          height: 96px;
        }

        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }
    }
  }
}
</style>
