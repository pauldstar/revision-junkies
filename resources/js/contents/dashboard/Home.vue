<template>
    <content-body>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-xxl-4">
                <div class="card balance-widget">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Your Portfolio </h4>
                    </div>
                    <div class="card-body pt-0">
                        <div class="balance-widget">
                            <div class="total-balance">
                                <h3>$63411.00</h3>
                                <h6>Total Balance</h6>
                            </div>
                            <ul class="list-unstyled">
                                <li class="media">
                                    <i class="cc BTC mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Bitcoin</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 BTC</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                                <li class="media">
                                    <i class="cc LTC mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Litecoin</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 LTC</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                                <li class="media">
                                    <i class="cc XRP mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Ripple</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 XRP</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                                <li class="media">
                                    <i class="cc DASH mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Dash</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 XRP</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-lg-8 col-xxl-8">
                <div class="card profile_chart">
                    <div class="card-header py-0">
                        <div class="chart_current_data">
                            <h3>254856 <span>USD</span></h3>
                            <p class="text-success">125648 <span>USD (20%)</span></p>
                        </div>
                        <div class="duration-option">
                            <a v-for="(value, name, index) in durationOptions"
                               href="#"
                               :id="name"
                               :class="{ active: activeDurationOption === index }"
                               @click="selectDurationOption(index)"
                            >{{ value }}</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="timeline-chart"></div>
                        <div class="chart-content text-center">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">24hr Volume</p>
                                        <h5>$1236548.325</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Market Cap</p>
                                        <h5>19B USD</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Circulating Supply</p>
                                        <h5>29.4M BTC</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">All Time High</p>
                                        <h5>19.783.06 USD</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Typical hold time </p>
                                        <h5>88 days</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Trading activity </p>
                                        <h5>70% buy </h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Popularity </p>
                                        <h5>#1 most held </h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Popularity </p>
                                        <h5>#1 most held </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-12 col-xxl-12">
                <div class="card">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Follow</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc BTC-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Bitcoin <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-success ml-2">+ 06%</span>
                                            </h4>
                                        </div>
                                        <div id="btcChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc ETH-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Ethereum <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-danger ml-2">- 06%</span>
                                            </h4>
                                        </div>
                                        <div id="ltcChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc LTC-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Litecoin <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-primary ml-2"> 06%</span>
                                            </h4>
                                        </div>
                                        <div id="xrpChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc XRP-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Ripple <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-danger ml-2">- 06%</span>
                                            </h4>
                                        </div>
                                        <div id="dashChart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-xxl-4">
                <div class="card">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Exchange</h4>
                    </div>
                    <div class="card-body">
                        <div class="buy-sell-widget">
                            <currency-form/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-xxl-8">
                <div class="card">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Recent Activities</h4>
                        <a href="#">View More </a>
                    </div>
                    <div class="card-body">
                        <div class="transaction-table">
                            <div class="table-responsive">
                                <table class="table mb-0 table-responsive-sm">
                                    <tbody>
                                    <tr>
                                        <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                        </td>

                                        <td>
                                            <span class="badge badge-danger">Sold</span>
                                        </td>
                                        <td>
                                            <i class="cc BTC"></i> Bitcoin
                                        </td>
                                        <td>
                                            Using - Bank *******5264
                                        </td>
                                        <td class="text-danger">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-success">Buy</span>
                                        </td>
                                        <td>
                                            <i class="cc LTC"></i> Litecoin
                                        </td>
                                        <td>
                                            Using - Card *******8475
                                        </td>
                                        <td class="text-success">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-danger">Sold</span>
                                        </td>
                                        <td>
                                            <i class="cc XRP"></i> Ripple
                                        </td>
                                        <td>
                                            Using - Card *******8475
                                        </td>
                                        <td class="text-danger">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-success">Buy</span>
                                        </td>
                                        <td>
                                            <i class="cc DASH"></i> Dash
                                        </td>
                                        <td>
                                            Using - Card *******2321
                                        </td>
                                        <td class="text-success">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-danger">Sold</span>
                                        </td>
                                        <td>
                                            <i class="cc BTC"></i> Bitcoin
                                        </td>
                                        <td>
                                            Using - Card *******2321
                                        </td>
                                        <td class="text-danger">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </content-body>
</template>

<script>
    import contentBody from '@js/components/dashboard/ContentBody.vue';
    import currencyForm from '@js/components/CurrencyForm.vue';
    import app from '@js/App.vue';

    export default {
        extends: app,
        components: {contentBody, currencyForm},

        data() {
            return {
                activeDurationOption: 0,

                durationOptions: {
                    'all': 'ALL',
                    'one_month': '1M',
                    'six_months': '6M',
                    'one_year': '1Y',
                    'ytd': 'YTD'
                },
            }
        },

        methods: {
            selectDurationOption(index) {
                this.activeDurationOption = index;
            }
        }
    }
</script>
