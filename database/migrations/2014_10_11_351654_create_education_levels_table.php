<?php

use App\EducationLevel;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_levels', function (Blueprint $table) {
            $table->tinyIncrements('id');
            $table->string('name', 10)->unique();
            $table->timestamps();
        });

        $this->seed();
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

    private function seed()
    {
        $levels = [
            'preschool',
            'primary',
            'secondary',
            'tertiary'
        ];

        foreach ($levels as $level) {
            EducationLevel::create([
                'name' => $level
            ]);
        }
    }
}
