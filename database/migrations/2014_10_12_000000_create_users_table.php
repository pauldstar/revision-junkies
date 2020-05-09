<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username', 50);
            $table->string('password');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('photo')->nullable();
            $table->string('email')->unique();
            $table->unsignedTinyInteger('openness')->default(0);
            $table->unsignedTinyInteger('conscientious')->default(0);
            $table->unsignedTinyInteger('extroversion')->default(0);
            $table->unsignedTinyInteger('agreeableness')->default(0);
            $table->unsignedTinyInteger('neuroticism')->default(0);
            $table->unsignedTinyInteger('visual')->default(0);
            $table->unsignedTinyInteger('auditory')->default(0);
            $table->unsignedTinyInteger('tactile')->default(0);
            $table->unsignedTinyInteger('education_level_id')->nullable();
            $table->foreign('education_level_id')->references('id')->on('education_levels');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
