<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationLevelTipTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_level_tip', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('education_level_id')->nullable();
            $table->foreign('education_level_id')->references('id')->on('education_levels');
            $table->foreignId('tip_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education_level_tip');
    }
}
